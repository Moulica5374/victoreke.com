import { Metadata } from "next";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Certifications & Education | Moulica Goli",
  description: "Professional certifications in AWS, Google Cloud, AI/ML and educational background",
};

export default function Certifications() {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Artificial Intelligence, Computer Science",
      institution: "Iowa State University",
      location: "Ames, Iowa, USA",
      date: "2024 - 2025",
      logo: "/logo_iowa.png",
      details: [
        "Relevant Coursework: Artificial intelligence, Natural language processing, Machine learning, Deep learning, Design and analysis of Algorithms, Data Structures, Responsible AI"
      ],
    },
    {
      id: 2,
      degree: "PG Diploma in Software Development - Specialization in Big Data",
      institution: "IIIT Bangalore",
      location: "Bangalore, India",
      date: "2021 - 2022",
      logo: "/images (1).png",
      details: [
        "Specialized training in Big Data technologies and Software Development",
        "Key Technologies: Hadoop, Spark, Data Engineering, Distributed Systems, Software Development",
        "Credential ID: 55404521",
      ],
    },
    {
      id: 3,
      degree: "Bachelor of Technology in Computer Science",
      institution: "JNTU Kakinada",
      location: "Kakinada, India",
      date: "2018 - 2022",
      logo: "/jntu.png",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Data Engineer - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      logo: "/aws_de.png",
      verifyUrl: "https://www.credly.com/badges/027cc84c-1332-4423-8bac-785b27e90494",
      skills: ["Data Pipeline", "ETL/ELT", "AWS Services", "Data Security"],
    },
    {
      id: 2,
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      logo: "/aws_ai.png",
      verifyUrl: "https://www.credly.com/badges/95963d14-7480-47ce-ab36-7208950281ba/linked_in_profile",
      skills: ["Machine Learning", "AI Services", "SageMaker", "Responsible AI"],
    },
    {
      id: 3,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2024",
      logo: "/gcp_de.png",
      verifyUrl: "https://www.credly.com/badges/1022250c-c00a-44c6-87ca-499cefb9ac86",
      skills: ["BigQuery", "Dataflow", "Data Modeling", "ML on GCP"],
    },
    {
      id: 4,
      title: "NVIDIA Certified Associate - Generative AI",
      issuer: "NVIDIA",
      date: "2024",
      logo: "/nvi.png",
      verifyUrl: "https://www.credly.com/badges/82280f6a-2523-4fab-996f-4fc8347adf43",
      skills: ["Generative AI", "LLMs", "Deep Learning", "GPU Computing"],
    },
    {
      id: 5,
      title: "Generative AI with Large Language Models",
      issuer: "Amazon Web Services",
      date: "Mar 2025",
      credentialId: "5HD4JBRTLUFH",
      logo: "/DeepLearning-AI.jpg",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/5HD4JBRTLUFH",
      skills: ["Generative AI", "Large Language Models", "AWS", "Machine Learning"],
    },
    {
      id: 6,
      title: "DeepLearning.AI TensorFlow Developer",
      issuer: "DeepLearning.AI",
      date: "Feb 2025",
      credentialId: "N6E634O7THNE",
      logo: "/DeepLearning-AI.jpg",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/N6E634O7THNE",
      skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Python"],
    },
    {
      id: 7,
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "Jan 2025",
      credentialId: "JW8Q4XXVHNI0",
      logo:"/DeepLearning-AI.jpg",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/JW8Q4XXVHNI0",
      skills: ["TensorFlow", "AI", "Machine Learning", "Deep Learning"],
    },
    {
      id: 8,
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI, Stanford University",
      date: "Nov 2024",
      credentialId: "49H013DBPXB9",
      logo: "/Stanford-University-Logo.png",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/49H013DBPXB9",
      skills: ["Machine Learning", "Python", "Supervised Learning", "Unsupervised Learning", "Neural Networks"],
    },
    {
      id: 9,
      title: "SDC27 - PG Diploma in Software Development (Big Data)",
      issuer: "United Latino Students Association",
      date: "Jul 2022",
      credentialId: "55404521",
      logo: "/images (1).png",
      verifyUrl: "https://www.credential.net/6de05d01-e687-4ae9-be18-2c98bede0a29#acc.eqwJNu7p",
      skills: ["Big Data", "Software Development", "Data Engineering", "Hadoop", "Spark"],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <Slide>
        <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6">
          Education & Certifications
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12">
          Academic background and professional certifications demonstrating expertise in cloud platforms, data engineering, and artificial intelligence.
        </p>
      </Slide>

      {/* Education Section */}
      <Slide delay={0.1}>
        <h2 className="font-incognito font-semibold text-2xl sm:text-3xl mb-6">
          Education
        </h2>
        <div className="grid md:grid-cols-1 grid-cols-1 gap-6 mb-16">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border dark:border-zinc-800 border-zinc-200 rounded-lg p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-1">{edu.degree}</h3>
                  <p className="text-base text-zinc-700 dark:text-zinc-300">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {edu.location} • {edu.date}
                  </p>
                  {edu.details && (
                    <ul className="mt-3 space-y-1">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Certifications Section */}
      <Slide delay={0.2}>
        <h2 className="font-incognito font-semibold text-2xl sm:text-3xl mb-6">
          Professional Certifications
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {certifications.map((cert) => (
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