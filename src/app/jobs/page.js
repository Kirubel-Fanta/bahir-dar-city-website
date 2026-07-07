import Link from "next/link";
import { Briefcase, MapPin, DollarSign } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/layout/PageHeader";
import { getJobs } from "@/lib/data";

export const metadata = { title: "Jobs" };

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div>
      <PageHeader eyebrow="Work" title="Job board" subtitle="Open roles from Bahir Dar businesses, hotels, and organizations.">
        <Button href="/jobs/post" variant="primary" size="sm" className="mt-4">
          Post a job
        </Button>
      </PageHeader>

      <div className="container-page py-10">
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} hover={false} className="p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-stone-900">{job.title}</h3>
                    <Badge tone="tana">{job.type}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-stone-500">{job.company}</p>
                  <p className="mt-2 max-w-2xl text-sm text-stone-600">{job.description}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </span>
                    {job.salaryMin && (
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" /> {job.salaryMin.toLocaleString()}–{job.salaryMax?.toLocaleString()} ETB/mo
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" /> {job.category}
                    </span>
                  </div>
                </div>
                <Button
                  href={job.applyUrl || `mailto:${job.applyEmail}`}
                  variant="secondary"
                  size="sm"
                  className="shrink-0"
                >
                  Apply
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
