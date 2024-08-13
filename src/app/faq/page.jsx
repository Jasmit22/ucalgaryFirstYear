"use client";
import React, { useState, useEffect } from "react";
import { getRatingColour } from "../page";
import Link from "next/link";

const Page = () => {
  const faq = [
    {
      question: "How should I prioritize my time in university?",
      answer:
        "Prioritize your schoolwork above all else. Balance academics with other activities, but studies should come first. Use breaks wisely by building your resume through jobs, internships, or research.",
    },

    {
      question: "How can I make the most of my time on campus?",
      answer:
        "Join a school club and engage with campus life. At UofC, the effort you put into campus activities will enhance your experience. Consider setting personal goals, like trying every food vendor on campus.",
    },

    {
      question: "Is it important to learn to cook?",
      answer:
        "Yes, learning to cook can save you money and help you maintain a healthier lifestyle.",
    },

    {
      question: "Should I attend exam prep sessions?",
      answer:
        "Attend exam prep sessions only if they’re free. Develop your own study habits early, as upper-year courses won’t have prep sessions.",
    },

    {
      question: "How do I manage stress and avoid burnout?",
      answer:
        "Avoid prioritizing partying and find healthy ways to de-stress. Drinking isn’t a sustainable stress relief method. Exercise, hobbies, and spending time with friends are better options.",
    },

    {
      question:
        "What are some common mistakes students make in their first year?",
      answer:
        "Many students aren’t prepared for the workload and difficulty of university compared to high school. Put in the effort to study consistently and don’t let high school achievements give you a false sense of security.",
    },

    {
      question: "How important is it to stay organized?",
      answer:
        "Extremely important. Keep track of all deadlines and important dates using a planner or digital calendar. Professors won’t remind you about due dates, so it’s up to you to stay on top of them.",
    },

    {
      question: "How can I succeed academically in university?",
      answer:
        "Stay on top of your readings and start assignments early. Organizing files and choosing a note-taking method before the semester starts will help you stay focused. Getting up early every day can also boost productivity.",
    },

    {
      question: "How can I build a social life in university?",
      answer:
        "Look for opportunities to make friends, such as joining clubs or talking to classmates. A strong support system is crucial for mental well-being and academic success. Don’t be afraid to start conversations or join group activities.",
    },

    {
      question: "What should I keep in mind about my grades and GPA?",
      answer:
        "Your grades and GPA are important, but they don’t define you. Focus on learning and personal growth, not just on achieving high grades.",
    },

    {
      question:
        "What should I do if I’m struggling in a course or with my major?",
      answer:
        "It’s okay to change your major if you’re not enjoying your classes. Speak to academic advisors, and explore different courses or study abroad opportunities.",
    },
    {
      question:
        "Can I get easy A’s in university like I did in high school without studying?",
      answer:
        "No, university is much more challenging than high school. You'll need to put in consistent effort and study regularly to achieve good grades.",
    },

    {
      question: "Is it okay to skip classes and catch up later?",
      answer:
        "Skipping classes can quickly snowball into a huge problem. It's easy to fall behind, and catching up on multiple classes before an exam is stressful and difficult. Attend your classes regularly.",
    },

    {
      question: "How important is it to maintain a daily schedule?",
      answer:
        "Maintaining a daily schedule is crucial. From day one, schedule due dates from the syllabus, structure your days, and plan ahead to stay on top of your workload.",
    },

    {
      question: "What should I do if I get lost on campus?",
      answer:
        "Getting lost is common for first-year students. Take time to explore the campus before your classes start, use campus maps, and ask for directions if needed.",
    },

    {
      question: "Should I buy all the textbooks at the start of the semester?",
      answer:
        "Not necessarily. Wait until after the first few classes to see if the textbook is really required. You might also find cheaper options or second-hand copies.",
    },

    {
      question:
        "What should I do if I receive a low grade on an assignment or test?",
      answer:
        "Don’t panic. One low grade doesn’t define your entire academic career. Reflect on what went wrong, seek help from your professor or TA, and focus on improving in future assessments.",
    },

    {
      question:
        "Is it a good idea to withdraw from a course after receiving a failing grade?",
      answer:
        "Withdrawing should be a last resort. Before making this decision, consult with an academic advisor to discuss your options and the potential impact on your degree.",
    },

    {
      question: "What happens if I forget my unicard for an exam or test?",
      answer:
        "Forgetting your unicard can cause unnecessary stress. Make it a habit to always carry it with you, especially during exams. Check your bag the night before to ensure you have everything you need.",
    },

    {
      question: "How important is it to read the course outline?",
      answer:
        "Reading the course outline is essential. It contains important information about the course, including grading policies, due dates, and expectations. Don't skip it.",
    },

    {
      question:
        "Why is it important to understand academic integrity policies?",
      answer:
        "Understanding academic integrity is critical. Misconduct, even unintentional, can lead to severe consequences like failing grades or expulsion. Familiarize yourself with the policies to avoid any issues.",
    },

    {
      question: "Should I attend tutorials and labs?",
      answer:
        "Yes, tutorials and labs are often crucial for understanding the material. Skipping them can hurt your understanding and grades. They are designed to reinforce what you learn in lectures.",
    },

    {
      question: "Is it beneficial to go to instructor and TA office hours?",
      answer:
        "Absolutely. Office hours are a great opportunity to ask questions, get clarification on difficult topics, and build a rapport with your professors and TAs. Don’t hesitate to use this resource.",
    },

    {
      question: "Is it okay to start assignments the day before they’re due?",
      answer:
        "Procrastinating on assignments is a common mistake. Start early to give yourself time to research, write, and revise. This will improve the quality of your work and reduce stress.",
    },
    {
      question: "Should I buy textbooks before the semester starts?",
      answer:
        "Don't buy textbooks unless you're absolutely sure you'll need them and can't find alternative sources. You'll save hundreds of dollars this way.",
    },

    {
      question:
        "How important is it to invest in experiences outside of academics?",
      answer:
        "Investing in yourself through experiences like international exchange, new hobbies, or research projects is invaluable. Don't wait until you feel 'ready'—start exploring opportunities early to avoid missing out.",
    },

    {
      question: "How can I build a social network at university?",
      answer:
        "Just talk to people. Whether in class or around campus, making connections early on can significantly enhance your university experience. Don’t be afraid to strike up conversations.",
    },

    {
      question: "Are GPA boosters effective?",
      answer:
        "GPA boosters are often a myth. Focus on understanding the material and doing your best rather than relying on 'easy' courses to inflate your GPA.",
    },

    {
      question:
        "Is it worth joining First Year Scholars or the honours program?",
      answer:
        "Many students find that First Year Scholars and some honours programs, like in actuarial science, aren’t worth the time and effort. Consider other opportunities that align more closely with your goals.",
    },

    {
      question:
        "Is it beneficial to major in something just because my friends are?",
      answer:
        "No, majoring in something just because your friends are in it is a mistake. Choose a major based on your interests and strengths, not peer pressure.",
    },

    {
      question: "How helpful is joining a club related to my major?",
      answer:
        "Joining a club related to your major is extremely helpful. It can provide networking opportunities, enhance your understanding of the field, and connect you with like-minded peers.",
    },

    {
      question: "Is it useful to have an upper-year mentor?",
      answer:
        "Yes, having an upper-year mentor can be very beneficial, especially when planning your career path or navigating university challenges.",
    },

    {
      question: "How valuable are U of C’s Career Services?",
      answer:
        "U of C’s Career Services is an amazing resource. Take full advantage of it for resume building, job search assistance, and career planning.",
    },

    {
      question:
        "Do I need to join clubs and extracurriculars in my first year?",
      answer:
        "Don't feel pressured to do everything in your first year. Focus on adjusting to university life, passing your courses, and making a few friends. There's plenty of time for extracurriculars later.",
    },

    {
      question: "Is it normal to have a low GPA in the first year?",
      answer:
        "Yes, a GPA in the 2.0-3.0 range is normal in the first year. Don’t stress if you get a couple of C's or need to withdraw from classes. University is a big adjustment, and grades often improve as you adapt.",
    },

    {
      question: "Any final tips?",
      answer:
        "Enjoy your university experience. Keep your hobbies alive and explore campus life. University should be a part of your life, not your entire life. Stay in touch with academic advisors to navigate any challenges.",
    },
  ];

  return (
    <div className="pb-24 gap-5 flex flex-col items-center min-h-screen m-auto justify-center">
      <div className="bg-ucalgaryRed fixed top-0 z-10 h-20 w-full"></div>
      <div className="text-black font-extrabold text-5xl text-center pt-32 mb-10">
        Frequently Asked Questions
      </div>

      {faq.map((item, key) => {
        return (
          <div
            className="collapse w-2/3 bg-white border-2 border-ucalgaryRed text-ucalgaryRed"
            key={key}
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p className="text-black">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
