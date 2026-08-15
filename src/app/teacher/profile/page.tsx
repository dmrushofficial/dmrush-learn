import Image from "next/image";
import { redirect } from "next/navigation";
import { courses } from "@/content/courses";
import { getInstructorByName } from "@/content/instructors";
import { getPortalTeacherSession } from "@/lib/portal/session-server";

export default async function TeacherProfilePage() {
  const teacher = await getPortalTeacherSession();
  if (!teacher) redirect("/login");
  const profile = getInstructorByName(teacher.name);
  const assigned = courses.filter((course) => teacher.assignedCourseIds.includes(course.id));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-[-0.03em] text-ink">Profile</h1>
        <p className="mt-2 text-sm text-muted">Your instructor account details.</p>
      </div>
      <dl className="space-y-4 rounded-2xl border border-line bg-surface p-6 text-sm">
        {profile ? (
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-line bg-panel">
            <Image
              src={profile.photo}
              alt={teacher.name}
              fill
              className="object-cover object-top"
              sizes="96px"
            />
          </div>
        ) : null}
        <div>
          <dt className="text-muted">Name</dt>
          <dd className="mt-1 font-semibold text-ink">{teacher.name}</dd>
        </div>
        <div>
          <dt className="text-muted">Email</dt>
          <dd className="mt-1 font-semibold text-ink">{teacher.email}</dd>
        </div>
        <div>
          <dt className="text-muted">Role</dt>
          <dd className="mt-1 font-semibold text-ink">{teacher.roleTitle}</dd>
        </div>
        <div>
          <dt className="text-muted">Assigned courses</dt>
          <dd className="mt-1 font-semibold text-ink">
            {assigned.length > 0
              ? assigned.map((course) => course.title).join(" · ")
              : `${teacher.assignedCourseIds.length} courses`}
          </dd>
        </div>
      </dl>
    </div>
  );
}
