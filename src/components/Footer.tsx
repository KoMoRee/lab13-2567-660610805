import { footerProps } from "@lib/types";

export default function Footer(student:footerProps) {



  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {student.studentId} {student.fullName} {student.year}</p>
    </div>
  );
}
