import { Metadata } from "next";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Certifications | Moulica Goli",
  description: "Professional certifications in AWS, Google Cloud, and AI/ML",
};

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Data Engineer - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      logo: "/aws_de.png",
      verifyUrl: "https://www.credly.com/badges/027cc84c-1332-4423-8bac-785b27e90494", // Add your credential verification URL
      skills: ["Data Pipeline", "ETL/ELT", "AWS Services", "Data Security"],
    },
    {
      id: 2,
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      logo: "/aws_ai.png",
      verifyUrl: "https://www.credly.com/badges/95963d14-7480-47ce-ab36-7208950281ba/linked_in_profile", // Add your credential verification URL
      skills: ["Machine Learning", "AI Services", "SageMaker", "Responsible AI"],
    },
    {
      id: 3,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2024",
      logo: "/gcp_de.png",
      verifyUrl: "https://www.credly.com/badges/1022250c-c00a-44c6-87ca-499cefb9ac86", // Add your credential verification URL
      skills: ["BigQuery", "Dataflow", "Data Modeling", "ML on GCP"],
    },
    {
      id: 4,
      title: "NVIDIA Certified Associate - Generative AI",
      issuer: "NVIDIA",
      date: "2024",
      logo: "/nvi.png",
      verifyUrl: "https://www.credly.com/earner/earned/badge/82280f6a-2523-4fab-996f-4fc8347adf43https://www.credly.com/badges/82280f6a-2523-4fab-996f-4fc8347adf43https://www.credly.com/badges/82280f6a-2523-4fab-996f-4fc8347adf43", // Add your credential verification URL
      skills: ["Generative AI", "LLMs", "Deep Learning", "GPU Computing"],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <Slide>
        <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6">
          Certifications
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12">
          Professional certifications demonstrating expertise in cloud platforms, data engineering, and artificial intelligence.
        </p>
      </Slide>

      <Slide delay={0.1}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="border dark:border-zinc-800 border-zinc-200 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-xl mb-1">{cert.title}</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                    Issued {cert.date}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
                  Skills Validated:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            {cert.verifyUrl !== "#" && (
    <a 
    href={cert.verifyUrl}
       
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
  >
    Verify Credential →
  </a>
              )}
            </div>
          ))}
        </div>
      </Slide>
    </main>
  );
}