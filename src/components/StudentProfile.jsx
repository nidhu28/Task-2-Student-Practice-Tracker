
import { useEffect } from "react";

function StudentProfile({ name, department, year, count }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Practice Sessions Completed: {count}</p>
    </div>
  );
}

export default StudentProfile;
