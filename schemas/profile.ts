import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(350),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "usage",
      title: "Usage",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
          description: 'Your GitHub profile URL'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          description: 'Your LinkedIn profile URL'
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
          description: 'Your Twitter/X profile URL'
        },
        {
          name: 'stackoverflow',
          title: 'Stack Overflow',
          type: 'url'
        },
        {
          name: 'codepen',
          title: 'Codepen',
          type: 'url'
        },
        {
          name: 'dribbble',
          title: 'Dribbble',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url'
        },
        {
          name: 'dailydev',
          title: 'Daily.dev',
          type: 'url'
        },
        {
          name: 'producthunt',
          title: 'Product Hunt',
          type: 'url'
        },
        {
          name: 'unsplash',
          title: 'Unsplash',
          type: 'url'
        },
        {
          name: 'steam',
          title: 'Steam',
          type: 'url'
        },
        {
          name: 'codewars',
          title: 'Codewars',
          type: 'url'
        },
        {
          name: 'gitlab',
          title: 'GitLab',
          type: 'url'
        }
      ]
    }),
  ],
};

export default profile;