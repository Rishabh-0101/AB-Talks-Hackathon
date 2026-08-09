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
        question:
          "Where should sensitive API secrets normally be stored?",
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
        question:
          "What should you do when feedback reveals a problem?",
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
  Days 11–20
*/
export const tasks = [
  ...challengeData,

  {
    day: 11,
    title: "Create the project MVP",
    description:
      "Build the smallest working version of your hackathon solution.",
    type: "quiz",
    questions: [
      {
        question: "What should an MVP contain?",
        options: [
          "Only the core value of the product",
          "Every possible feature",
          "Only animations",
          "Only documentation"
        ],
        answer: 0
      },
      {
        question: "What should you prioritize first?",
        options: [
          "Core user workflow",
          "Extra settings",
          "Decorative animations",
          "Admin dashboard"
        ],
        answer: 0
      },
      {
        question: "What should happen after building the MVP?",
        options: [
          "Test the complete user flow",
          "Stop development",
          "Delete the prototype",
          "Add random features"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Build the first working MVP.",
      "Complete the main user flow.",
      "Test the MVP."
    ]
  },

  {
    day: 12,
    title: "Build the main user flow",
    description:
      "Make the primary journey from user input to useful result work correctly.",
    type: "quiz",
    questions: [
      {
        question: "What is the main user flow?",
        options: [
          "The steps a user follows to achieve the main goal",
          "The CSS structure",
          "The Git history",
          "The project folder structure"
        ],
        answer: 0
      },
      {
        question: "What should you remove from the main flow?",
        options: [
          "Unnecessary steps",
          "Important actions",
          "User feedback",
          "Validation"
        ],
        answer: 0
      },
      {
        question: "What should you test?",
        options: [
          "The complete user journey",
          "Only the homepage",
          "Only the footer",
          "Only the logo"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Complete the main user journey.",
      "Remove unnecessary friction.",
      "Test the complete flow."
    ]
  },

  {
    day: 13,
    title: "Connect the frontend and backend",
    description:
      "Connect your user interface with the backend or service layer.",
    type: "quiz",
    questions: [
      {
        question: "Why connect frontend and backend?",
        options: [
          "To exchange application data",
          "To change colors",
          "To create animations",
          "To rename files"
        ],
        answer: 0
      },
      {
        question: "What should an API response contain?",
        options: [
          "Useful data or an appropriate error",
          "Random HTML",
          "CSS only",
          "Git commands"
        ],
        answer: 0
      },
      {
        question: "What should happen when an API fails?",
        options: [
          "Show a useful error state",
          "Crash silently",
          "Delete the data",
          "Refresh forever"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Connect the required API or backend.",
      "Handle successful responses.",
      "Handle API errors."
    ]
  },

  {
    day: 14,
    title: "Design the data flow",
    description:
      "Define how information moves through your application.",
    type: "quiz",
    questions: [
      {
        question: "What does data flow describe?",
        options: [
          "How information moves through the system",
          "Only page colors",
          "Only Git commits",
          "Only typography"
        ],
        answer: 0
      },
      {
        question: "Why should data flow be clear?",
        options: [
          "It makes the system easier to understand and debug",
          "It increases CSS size",
          "It removes testing",
          "It hides errors"
        ],
        answer: 0
      },
      {
        question: "What should you avoid?",
        options: [
          "Unnecessary duplicated state",
          "Clear data ownership",
          "Validation",
          "Error handling"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Document the main data flow.",
      "Remove unnecessary duplicated state.",
      "Test data movement."
    ]
  },

  {
    day: 15,
    title: "Add validation",
    description:
      "Validate important user inputs before processing them.",
    type: "quiz",
    questions: [
      {
        question: "Why validate user input?",
        options: [
          "To prevent invalid data from entering the system",
          "To make forms longer",
          "To remove the backend",
          "To improve animations"
        ],
        answer: 0
      },
      {
        question: "Where should important validation happen?",
        options: [
          "At appropriate frontend and backend boundaries",
          "Only in CSS",
          "Only in comments",
          "Nowhere"
        ],
        answer: 0
      },
      {
        question: "What should invalid input produce?",
        options: [
          "A clear error message",
          "A blank screen",
          "Silent failure",
          "Random data"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Validate important inputs.",
      "Show clear validation messages.",
      "Test invalid input cases."
    ]
  },

  {
    day: 16,
    title: "Improve error handling",
    description:
      "Make failures understandable instead of leaving users with broken screens.",
    type: "quiz",
    questions: [
      {
        question: "What should a good error state provide?",
        options: [
          "A clear explanation and possible next action",
          "Only a red screen",
          "No information",
          "A random message"
        ],
        answer: 0
      },
      {
        question: "What should happen when a request fails?",
        options: [
          "Handle the failure gracefully",
          "Ignore it",
          "Delete the application",
          "Freeze the page"
        ],
        answer: 0
      },
      {
        question: "Why is error handling important in a demo?",
        options: [
          "It makes the product more reliable",
          "It removes the need for a UI",
          "It increases animations",
          "It hides the problem"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Add useful error states.",
      "Handle failed requests.",
      "Test failure scenarios."
    ]
  },

  {
    day: 17,
    title: "Improve loading states",
    description:
      "Make asynchronous operations understandable to users.",
    type: "quiz",
    questions: [
      {
        question: "Why use a loading state?",
        options: [
          "To tell the user that work is in progress",
          "To hide errors",
          "To increase bundle size",
          "To replace the API"
        ],
        answer: 0
      },
      {
        question: "What should happen after loading finishes?",
        options: [
          "Show the result or an error",
          "Keep loading forever",
          "Delete the result",
          "Refresh automatically"
        ],
        answer: 0
      },
      {
        question: "What should you avoid?",
        options: [
          "Confusing infinite loading",
          "Clear feedback",
          "Error handling",
          "User feedback"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Add loading feedback.",
      "Handle success and failure.",
      "Test slow and failed requests."
    ]
  },

  {
    day: 18,
    title: "Improve responsive design",
    description:
      "Make the main experience usable on mobile, tablet and desktop.",
    type: "quiz",
    questions: [
      {
        question: "Why is responsive design important?",
        options: [
          "Users have different screen sizes",
          "It removes backend work",
          "It replaces testing",
          "It increases Git commits"
        ],
        answer: 0
      },
      {
        question: "What should you test?",
        options: [
          "Main screens at multiple widths",
          "Only desktop",
          "Only one phone",
          "Only the footer"
        ],
        answer: 0
      },
      {
        question: "What is a common responsive problem?",
        options: [
          "Overflow and unreadable layouts",
          "Good spacing",
          "Clear navigation",
          "Accessible buttons"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Test mobile layout.",
      "Test desktop layout.",
      "Fix overflow and spacing issues."
    ]
  },

  {
    day: 19,
    title: "Improve accessibility",
    description:
      "Make the important parts of the application easier for more users to operate.",
    type: "quiz",
    questions: [
      {
        question: "Why is accessibility important?",
        options: [
          "More people can use the product",
          "It makes code longer",
          "It removes testing",
          "It only helps developers"
        ],
        answer: 0
      },
      {
        question: "What should interactive elements have?",
        options: [
          "Clear labels and understandable actions",
          "Random icons",
          "Hidden text",
          "No keyboard support"
        ],
        answer: 0
      },
      {
        question: "What should you check?",
        options: [
          "Keyboard navigation and readable contrast",
          "Only animations",
          "Only gradients",
          "Only images"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Review interactive elements.",
      "Improve labels and focus states.",
      "Check keyboard usability."
    ]
  },

  {
    day: 20,
    title: "Create the project dashboard",
    description:
      "Show the most important project information in one clear place.",
    type: "quiz",
    questions: [
      {
        question: "What should a useful dashboard show?",
        options: [
          "Important information and actions",
          "Every possible piece of data",
          "Only decoration",
          "Only the project logo"
        ],
        answer: 0
      },
      {
        question: "What should receive visual priority?",
        options: [
          "The most important information",
          "Random statistics",
          "Footer links",
          "Unused features"
        ],
        answer: 0
      },
      {
        question: "What should you avoid?",
        options: [
          "Information overload",
          "Clear hierarchy",
          "Useful metrics",
          "Simple navigation"
        ],
        answer: 0
      }
    ],
    deliverables: [
      "Build the main dashboard.",
      "Show useful project information.",
      "Improve information hierarchy."
    ]
  },

  /*
    Days 21–60

    IMPORTANT:
    There must be exactly 40 missions here because:
    21 → 60 = 40 days.
  */
  ...Array.from({ length: 40 }, (_, index) => {
    const day = index + 21;

    const missions = [
      "Refine the core feature",
      "Improve API integration",
      "Improve database handling",
      "Add useful user feedback",
      "Improve application performance",
      "Review security",
      "Improve authentication flow",
      "Improve authorization rules",
      "Clean up project structure",
      "Refactor duplicated code",
      "Improve form experience",
      "Improve empty states",
      "Improve mobile experience",
      "Add meaningful analytics",
      "Improve project documentation",
      "Write API documentation",
      "Improve README",
      "Add screenshots to documentation",
      "Prepare project architecture diagram",
      "Create system workflow documentation",
      "Test edge cases",
      "Fix critical bugs",
      "Review API failures",
      "Review data validation",
      "Review user permissions",
      "Improve deployment configuration",
      "Check production environment variables",
      "Optimize important pages",
      "Review browser compatibility",
      "Improve UI consistency",
      "Improve navigation",
      "Improve onboarding",
      "Prepare demo data",
      "Create final demo workflow",
      "Record the main product flow",
      "Prepare judge presentation",
      "Prepare problem-solution explanation",
      "Prepare technical explanation",
      "Final project testing",
      "Finalize and submit the project"
    ];

    /*
      Defensive fallback:
      Even if someone later edits the missions array incorrectly,
      the app will not crash with:
      "Cannot read properties of undefined (reading 'toLowerCase')"
    */
    const mission =
      typeof missions[index] === "string" && missions[index].trim()
        ? missions[index]
        : `Complete Day ${day} project work`;

    return {
      day,
      title: mission,
      description: `Work on ${mission.toLowerCase()} for your hackathon project and record meaningful progress.`,
      type: "quiz",

      questions: [
        {
          question: `What is the main goal of Day ${day}?`,
          options: [
            mission,
            "Add random features",
            "Ignore the project",
            "Delete the repository"
          ],
          answer: 0
        },

        {
          question: "What should you do after making the change?",
          options: [
            "Test the change",
            "Ignore the result",
            "Delete the feature",
            "Stop development"
          ],
          answer: 0
        },

        {
          question: "What should your progress represent?",
          options: [
            "Actual work completed on the project",
            "Page refreshes",
            "Random clicks",
            "Time spent on the homepage"
          ],
          answer: 0
        }
      ],

      deliverables: [
        `Complete: ${mission}.`,
        "Test the implementation.",
        "Record meaningful progress."
      ]
    };
  })
];

/*
  Challenge achievements
*/
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

/*
  Learning guides
*/
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

/*
  Streak rewards
*/
export const streakRewards = [
  {
    id: "bronze",
    title: "Bronze Medal",
    streak: 5,
    label: "5 DAY STREAK",
    description: "Complete 5 consecutive challenge days."
  },

  {
    id: "silver",
    title: "Silver Medal",
    streak: 12,
    label: "12 DAY STREAK",
    description: "Complete 12 consecutive challenge days."
  },

  {
    id: "gold",
    title: "Gold Medal",
    streak: 30,
    label: "30 DAY STREAK",
    description: "Complete 30 consecutive challenge days."
  },

  {
    id: "platinum",
    title: "Platinum Medal",
    streak: 45,
    label: "45 DAY STREAK",
    description: "Complete 45 consecutive challenge days."
  },

  {
    id: "diamond",
    title: "Diamond Medal",
    streak: 60,
    label: "60 DAY STREAK",
    description: "Complete all 60 consecutive challenge days."
  }
];