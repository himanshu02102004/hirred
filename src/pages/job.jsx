import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ApplyJobDrawer from "@/components/apply-job";
import ApplicationCard from "@/components/application-card";
import { Modal } from "@/components/modal";

const JobPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal to apply for a job
  const [selectedApplicationStatus, setSelectedApplicationStatus] = useState("all"); // Filter by application status

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    {
      job_id: id,
    }
  );

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  const toggleApplyModal = () => setIsModalOpen(!isModalOpen);

  // Filter applications based on status
  const filteredApplications = selectedApplicationStatus === "all" 
    ? job?.applications 
    : job?.applications?.filter(application => application.status === selectedApplicationStatus);

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mt-4 " width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-8 mt-5">
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-6xl">{job?.title}</h1>
        <img src={job?.company?.logo_url} className="h-12" alt={job?.title} />
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <MapPinIcon />
          {job?.location}
        </div>

        <div className="flex gap-2">
          <Briefcase /> {job?.applications?.length} Applicants
        </div>

        <div className="flex gap-2">
          {job?.isOpen ? (
            <>
              <DoorOpen /> Open
            </>
          ) : (
            <>
              <DoorClosed /> Closed
            </>
          )}
        </div>
      </div>

      {/* Hiring status dropdown */}
      {job?.recruiter_id === user?.id && (
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger
            className={`w-full ${job?.isOpen ? "bg-green-950" : "bg-red-950"}`}
          >
            <SelectValue
              placeholder={"Hiring Status" + (job?.isOpen ? "(Open)" : "(Closed)")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open"> Open </SelectItem>
            <SelectItem value="closed"> Closed </SelectItem>
          </SelectContent>
        </Select>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold">About The Job</h2>
      <p className="sm:text-lg">{job?.description}</p>

      <h2 className="text-2xl sm:text-3xl font-bold">What We Are Looking For</h2>
      <MDEditor.Markdown
        source={job?.requirements}
        className="bg-transparent sm:text-lg"
      />

      {/* Apply button and modal */}
      {job?.recruiter_id !== user?.id && (
        <button
          onClick={toggleApplyModal}
          className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Apply for Job
        </button>
      )}

      {isModalOpen && (
        <Modal onClose={toggleApplyModal}>
          <ApplyJobDrawer
            job={job}
            user={user}
            fetchjob={fnJob}
            applied={job?.applications?.find((ap) => ap.candidate_id === user.id)}
          />
        </Modal>
      )}

      {loadingHiringStatus && <BarLoader width={"100%"} color="#36d7b7" />}

      {/* Application filtering and listing */}
      {job?.recruiter_id === user?.id && (
        <div className="flex gap-4">
          <Select
            onValueChange={setSelectedApplicationStatus}
            value={selectedApplicationStatus}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by Application Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="interviewing">Interviewing</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="flex flex-col gap-2 mt-5">
          <h2 className="text-2xl sm:text-3xl font-bold">Applications</h2>
          {filteredApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPage;
