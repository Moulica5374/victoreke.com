import { Metadata } from "next";
import ProtectedResumeAccess from "./ProtectedResumeAccess";

export const metadata: Metadata = {
  title: "Resume | Moulica Goli",
  description: "Professional resume - Available for recruiters and hiring managers",
};

export default function ResumePage() {
  return <ProtectedResumeAccess />;
}