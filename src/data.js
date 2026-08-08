export const profile = {
  name: "Rishabh Patel",
  college: "ABES Engineering College, Ghaziabad",
  year: "B.Tech 2nd Year",
  track: "Full-Stack Development"
};

const challengeData = [
  {
    day: 1,
    title: "Set up your project proof",
    description:
      "Create your project repository, make your first meaningful commit and publish your first learning update.",
    type: "proof",
    deliverables: [
      "Create the project repository.",
      "Make a meaningful GitHub commit.",
      "Share your learning progress publicly."
    ]
  },

  {
    day: 2,
    title: "Understand the problem",
    description:
      "Define the real problem your hackathon project is trying to solve.",
    type: "quiz",
    questions: [
      {
        question: "What should be the first step before building a solution?",
        options: [
          "Choose random technologies",
          "Understand the problem",
          "Design the logo",
          "Deploy immediately"
        ],
        answer: 1
      },
      {
        question: "A good problem statement should primarily describe:",
        options: [
          "The programming language",
          "The user's problem",
          "The GitHub repository",
          "The UI colors"
        ],
        answer: 1
      },
      {
        question: "Who should be considered while defining a product problem?",
        options: [
          "Only the developer",
          "Only the judge",
          "The target user",
          "Nobody"
        ],
        answer: 2
      }
    ],
    deliverables: [
      "Understand the problem.",
      "Identify the target user.",
      "Write a clear problem statement."
    ]
  },

  {
    day: 3,
    title: "Design the solution",
    description:
      "Turn your problem statement into a practical solution that can actually be built.",
    type: "quiz",
    questions: [
      {
        question: "What should a solution directly address?",
        options: [
          "The user's problem",
          "Only the UI",
          "Only the database",
          "Only the presentation"
        ],
        answer: 0
      },
      {
        question: "What is an MVP?",
        options: [
          "A final enterprise product",
          "A minimum viable product",
          "A marketing video",
          "A testing framework"
        ],
        answer: 1
      },
      {
        question: "Why is an MVP useful in a hackathon?",
        options: [
          "It reduces the need to understand users",
          "It focuses development on the core idea",
          "It removes testing",
          "It removes the need for a demo"
        ],
        answer: 1
      }
    ],
    deliverables: [
      "Define your proposed solution.",
      "Identify the core feature.",
      "Keep the first version practical."
    ]
  },

  {
    day: 4,
    title: "Plan the technical architecture",
    description:
      "Decide how your frontend, backend, database and APIs will work together.",
    type: "quiz",
    questions: [
      {
        question: "What is frontend primarily responsible for?",
        options: [
          "User interface and interaction",
          "Database storage only",
          "Server hardware",
          "Git commits"
        ],
        answer: 0
      },
      {
        question: "What is an API commonly used for?",
        options: [
          "Connecting software components",
          "Changing monitor brightness",
          "Writing documentation only",
          "Creating folders"
        ],
        answer: 0
      },
      {
        question: "Where should sensitive API secrets normally be stored?",
        options: [
          "Public React components",
          "README.md",
          "Secure environment variables/backend",
          "HTML comments"
        ],
        answer: 2
      }
    ],
    deliverables: [
      "Choose your technology stack.",
      "Plan the main system components.",
      "Define how components communicate."
    ]
  },

  {
    day: 5,
    title: "Build the core feature",
    description:
      "Implement the most important feature of your project.",
    type: "quiz",
    questions: [
      {
        question: "What should you build first?",
        options: [
          "The core user feature",
          "Every possible feature",
          "Only animations",
          "Only documentation"
        ],
        answer: 0
      },
      {
        question: "Why should features be built incrementally?",
        options: [
          "To make testing easier",
          "To avoid testing",
          "To remove the need for planning",
          "To make the project slower"
        ],
        answer: 0
      },
      {
        question: "What should happen after implementing a core feature?",
        options: [
          "Test it",
          "Delete it",
          "Ignore it",
          "Immediately rewrite everything"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Implement the core feature.",
      "Test the feature.",
      "Fix the most important issue."
    ]
  },

  {
    day: 6,
    title: "Improve user experience",
    description:
      "Review your interface and make the most important user flow easier to understand.",
    type: "quiz",
    questions: [
      {
        question: "What is good UX mainly concerned with?",
        options: [
          "Making the product easy to use",
          "Adding random animations",
          "Making code longer",
          "Adding more buttons"
        ],
        answer: 0
      },
      {
        question: "What should a primary button communicate?",
        options: [
          "The main available action",
          "A random action",
          "A hidden error",
          "Nothing"
        ],
        answer: 0
      },
      {
        question: "Why is responsive design important?",
        options: [
          "Users use different screen sizes",
          "It increases code length",
          "It removes testing",
          "It replaces backend development"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Review the main user flow.",
      "Improve clarity.",
      "Check the interface on different screen sizes."
    ]
  },

  {
    day: 7,
    title: "Validate your idea",
    description:
      "Check whether the current product actually solves the problem you identified.",
    type: "quiz",
    questions: [
      {
        question: "What is validation intended to discover?",
        options: [
          "Whether the solution addresses the real problem",
          "Whether the logo is popular",
          "Whether the code is long",
          "Whether the README has many lines"
        ],
        answer: 0
      },
      {
        question: "What is useful when validating a product?",
        options: [
          "User feedback",
          "Random assumptions",
          "Ignoring users",
          "Deleting the prototype"
        ],
        answer: 0
      },
      {
        question: "What should you do when feedback reveals a problem?",
        options: [
          "Improve the product",
          "Ignore it automatically",
          "Delete the project",
          "Stop testing"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Review your product against the original problem.",
      "Identify one weakness.",
      "Improve the solution."
    ]
  },

  {
    day: 8,
    title: "Testing and reliability",
    description:
      "Find bugs and make the main workflow reliable.",
    type: "quiz",
    questions: [
      {
        question: "Why do we test software?",
        options: [
          "To find and prevent problems",
          "To make the UI darker",
          "To increase file size",
          "To avoid development"
        ],
        answer: 0
      },
      {
        question: "What is a regression?",
        options: [
          "A previously working feature stops working",
          "A new folder is created",
          "A successful deployment",
          "A GitHub profile"
        ],
        answer: 0
      },
      {
        question: "What should be tested first?",
        options: [
          "Critical user flows",
          "Unused features",
          "Random pages",
          "Only the footer"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Test the main workflow.",
      "Find important bugs.",
      "Fix critical issues."
    ]
  },

  {
    day: 9,
    title: "Security review",
    description:
      "Review your project for obvious security and secret-management mistakes.",
    type: "quiz",
    questions: [
      {
        question: "Should a private API key be committed to GitHub?",
        options: [
          "Yes",
          "No",
          "Only inside README",
          "Only inside CSS"
        ],
        answer: 1
      },
      {
        question: "What is .env commonly used for?",
        options: [
          "Environment configuration",
          "CSS styling",
          "Images",
          "HTML layout"
        ],
        answer: 0
      },
      {
        question: "What should be used for owner-only actions?",
        options: [
          "Proper authentication and authorization",
          "A hidden button only",
          "A CSS class",
          "A comment"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Check secret handling.",
      "Review owner-only functionality.",
      "Remove obvious security mistakes."
    ]
  },

  {
    day: 10,
    title: "Prepare the final demo",
    description:
      "Prepare the project so another person can understand and use the main workflow.",
    type: "quiz",
    questions: [
      {
        question: "What should a hackathon demo emphasize?",
        options: [
          "The problem, solution and working product",
          "Only the source code",
          "Only the logo",
          "Only the README"
        ],
        answer: 0
      },
      {
        question: "What should you demonstrate first?",
        options: [
          "The main user problem and solution",
          "Random settings",
          "Unused features",
          "Development history"
        ],
        answer: 0
      },
      {
        question: "Why is a clear demo flow important?",
        options: [
          "It helps judges understand the product",
          "It removes the need for a working product",
          "It replaces testing",
          "It hides bugs"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Prepare the main demo flow.",
      "Explain the problem and solution.",
      "Verify the final build."
    ]
  }
];

/*
  Keep the remaining days usable.
  They can be expanded later with their own challenge objects.
*/
export const tasks = Array.from({ length: 60 }, (_, index) => {
  const day = index + 1;
  const existing = challengeData.find(item => item.day === day);

  if (existing) {
    return existing;
  }

  return {
    day,
    title: `Build Challenge Project ${day}`,
    description: `Complete the Day ${day} development mission.`,
    type: "quiz",
    questions: [
      {
        question: `What is the main goal of Day ${day}?`,
        options: [
          "Complete the assigned development mission",
          "Skip the project",
          "Delete the repository",
          "Ignore the task"
        ],
        answer: 0
      },
      {
        question: "What should you do after making a change?",
        options: [
          "Test the change",
          "Ignore it",
          "Delete the project",
          "Stop development"
        ],
        answer: 0
      },
      {
        question: "What should progress represent?",
        options: [
          "Actual completed work",
          "Random button clicks",
          "Page refreshes",
          "Time spent on the homepage"
        ],
        answer: 0
      }
    ],
    deliverables: [
      `Complete the Day ${day} mission.`,
      "Test your work.",
      "Record meaningful progress."
    ]
  };
});

export const achievements = [
  {
    id: "first",
    title: "First Proof",
    detail: "Complete your first verified challenge day.",
    day: 1
  },
  {
    id: "week",
    title: "7 Day Builder",
    detail: "Complete seven challenge days.",
    day: 7
  },
  {
    id: "half",
    title: "Halfway Hero",
    detail: "Complete thirty challenge days.",
    day: 30
  },
  {
    id: "finish",
    title: "60 Day Finisher",
    detail: "Complete the complete challenge.",
    day: 60
  }
];

export const guides = [
  {
    title: "How the streak works",
    body:
      "A streak grows only when a challenge day is actually completed. Refreshing the page does not create progress."
  },
  {
    title: "Day 1 proof",
    body:
      "Day 1 uses the GitHub repository, GitHub commit and LinkedIn proof flow."
  },
  {
    title: "Daily challenges",
    body:
      "From Day 2 onward, each challenge uses its own mission and questions instead of repeating the Day 1 proof form."
  },
  {
    title: "Missed day",
    body:
      "A missed day does not invent progress. Complete the available mission before marking the day complete."
  }
];