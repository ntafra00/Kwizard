import { QuizCategory as QuizCategoryEnum } from "@/enums";
import { FormErrorMessage, FormErrorMessageFunction, NavigationLink, PostData, QuizCategory, Answer, QuizData, QuizCreationStep, Topic } from "@/typings";
import { v4 as uuid } from "uuid";

const COMMON_LINKS: NavigationLink[] = [{ text: "Quizzes", path: "quizzes", id: uuid() }, { text: "Stories", path: "stories", id: uuid() }, { text: "About us", path: "aboutUs", id: uuid() }]

export const AUTHORIZED_LINKS: NavigationLink[] = [...COMMON_LINKS, { text: "Profile", path: "profile", id: uuid() }, { text: "Sign out", path: "", id: uuid() }];
export const NON_AUTHORIZED_LINKS: NavigationLink[] = [...COMMON_LINKS, { text: "Login", path: "", id: uuid() }, { text: "Register", path: "", id: uuid() }];

export const FORM_ERROR_MESSAGES: FormErrorMessage = {
    invalidCredentials: "Invalid credentials",
    required: "Field is required",
    invalidEmail: "Invalid email address",
    passwordsDoNotMatch: "Passwords do not match",
    invalidPhoneNumber: "Invalid phone number",
}

export const FORM_ERROR_MESSAGE_FUNCTIONS: FormErrorMessageFunction = {
    maxLength: (length: string) => `Field has to contain maximum ${length} characters`,
}

export const POSTS: PostData[] = [
    {
        id: "14eff715-2a5f-45e1-a557-c467cdb04fd1",
        imageUrl: "/educationStory.png",
        topic: "Education",
        description: "Online Quizzes vs. Traditional Tests: Which is Better for Learning?",
        content: [
            {
                text: "In the ever-evolving landscape of education, technology has introduced new ways of assessing student knowledge and understanding. Online quizzes and traditional paper-and-pencil tests each have their merits, but which one is more effective for learning? In this blog post, we'll explore the pros and cons of these two assessment formats to help you make an informed choice for your educational needs.",
                type: "text"
            },
            {
                text: "Online Quizzes: The Digital Advantage",
                type: "heading",
            },
            {
                text: "Pros:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: ["Accessibility: Online quizzes can be taken from anywhere with an internet connection, making them accessible to remote learners and those with busy schedules.", "Immediate Feedback: With automatic grading, students receive instant feedback, enabling them to learn from their mistakes right away.", "Engagement: Incorporating multimedia elements like videos and interactive questions can enhance engagement and cater to various learning styles.", "Data Tracking: Educators can easily collect and analyze data on student performance to tailor instruction and interventions."],
                type: "ordered",
            },
            {
                text: "Cons:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: ["Security Concerns: Online quizzes can be susceptible to cheating and academic dishonesty if not carefully monitored.", "Technical Issues: Students may encounter technical problems, such as internet connectivity issues or software glitches, disrupting the assessment process."],
                type: "ordered",
            },
            {
                text: "Traditional Tests: Tried and True",
                type: "heading",
            },
            {
                text: "Pros:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: ["Familiarity: Traditional tests have been used for generations, and students are generally familiar with the format.", "Security: It can be easier to prevent cheating during in-person exams with proper proctoring.", "No Technical Hurdles: There are no technology-related issues to contend with, ensuring a smoother testing experience."],
                type: "ordered",
            },
            {
                text: "Cons:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: ["Limited Feedback: Grading traditional tests can be time-consuming, leading to delayed feedback for students.", "Stress: High-stakes traditional tests can induce test anxiety, potentially hindering performance."],
                type: "ordered",
            },
            {
                text: "Which Is Better for Learning?",
                type: "heading",
            },
            {
                text: "The answer isn't a one-size-fits-all. The choice between online quizzes and traditional tests depends on various factors:",
                type: "text",
            },
            {
                text: ["Course Objectives: Consider your learning goals. Online quizzes might be more suitable for formative assessment and frequent knowledge checks, while traditional tests may be preferred for summative assessments.", "Student Preferences: Survey your students to understand their preferences and comfort levels with technology.", "Time and Resources: Assess your available time, resources, and technical capabilities for delivering assessments."],
                type: "unordered",
            },
            {
                text: "In conclusion, online quizzes offer flexibility, immediate feedback, and engagement, while traditional tests are reliable and familiar. The ideal approach often involves a combination of both, leveraging the strengths of each format to create a well-rounded assessment strategy that enhances learning outcomes.",
                type: "text",
            },
            {
                text: "Ultimately, the choice between online quizzes and traditional tests should align with your educational objectives and the needs of your students. Adapting your assessment methods to suit the learning environment can lead to a more effective and engaging educational experience.",
                type: "text"
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "45d2c3ca-4905-4d7d-8b7f-5657e8d01a64",
        imageUrl: "/gamificationStory.png",
        topic: "Education",
        description: "Gamification in Education: Using Quizzes to Make Learning Fun",
        content: [
            {
                text: "Gamification, the integration of game elements into non-game contexts, has been a game-changer in the world of education. It transforms the learning experience into an engaging adventure, and quizzes play a pivotal role in this process. In this blog post, we'll explore how gamifying quizzes can make learning more enjoyable and effective.",
                type: "text",
            },
            {
                text: "Why Gamify Quizzes?",
                type: "heading",
            },
            {
                text: "Quizzes can be fun! By adding gamified elements, educators can tap into the natural inclination of humans to enjoy challenges and receive rewards. Here's why gamification works in education:",
                type: "text",
            },
            {
                text: ["Increased Engagement: Gamified quizzes pique students' interest, making them more eager to participate and learn.", "Motivation: The promise of rewards, points, or badges can motivate students to actively engage with the material.", "Sense of Progress: Gamification often includes progress tracking, giving students a sense of accomplishment as they move through the course.", "Competition and Collaboration: Leaderboards and team challenges foster healthy competition and encourage collaboration among students."],
                type: "ordered",
            },
            {
                text: "How to Gamify Quizzes:",
                type: "heading",
            },
            {
                text: "1. Points and Badges:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Assign points for correct answers and award badges for completing quiz milestones. This taps into students' desire for recognition and achievement.",
                type: "text",
            },
            {
                text: "2. Leaderboards:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Create a virtual scoreboard where students can see how their performance compares to their peers. Leaderboards fuel friendly competition and encourage students to strive for the top spot.",
                type: "text",
            },
            {
                text: "3. Time Pressure:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Add a time limit to quizzes to create a sense of urgency, mimicking the adrenaline rush of a game. However, ensure the time frame allows for thoughtful consideration.",
                type: "text",
            },
            {
                text: "4. Storytelling:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Craft a narrative or storyline that connects quiz questions, turning the assessment into a captivating adventure. Each question can represent a challenge within the narrative.",
                type: "text",
            },
            {
                text: "5. Rewards and Prizes:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Offer rewards for achieving certain scores or completing a series of quizzes. These rewards could include extra credit, access to bonus content, or tangible prizes for added motivation.",
                type: "text",
            },
            {
                text: "Examples of Gamified Quizzes:",
                type: "heading"
            },
            {
                text: "1. Quiz-Based Escape Room:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Design a quiz where each question unlocks a clue or piece of a puzzle, and students must solve the puzzle to 'escape' the virtual room.",
                type: "text",
            },
            {
                text: "2. Trivia Showdown:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Host a quiz competition, similar to a game show, where students answer questions in a timed format and compete for points.",
                type: "text",
            },
            {
                text: "3. Role-Playing Quizzes:",
                type: "text",
                fontStyle: "italic",
            },
            {
                text: "Students assume a role and work through scenarios, answering questions based on their chosen character's perspective.",
                type: "text",
            },
            {
                text: "Best Practices:",
                type: "heading",
            },
            {
                text: ["Ensure that the gamification elements align with the learning objectives and content.", "Keep the game elements challenging but not overwhelming to prevent frustration.", "Encourage reflection after gamified quizzes to connect the experience to deeper learning."],
                type: "unordered",
            },
            {
                text: "Incorporating gamification into quizzes can transform your classroom or online course into an engaging and dynamic learning environment. By harnessing the power of game elements, educators can enhance motivation, increase participation, and ultimately make learning an enjoyable adventure for students of all ages. So, why not give it a try and level up your quizzes?",
                type: "text"
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "10/07/2023",
    },
    {
        id: "f7ab1f23-4a5f-44ac-9559-69a66a8ec0e7",
        imageUrl: "/learningPotentialStory.png",
        topic: "Education",
        description: "Unlocking Learning Potential: The Quiz-Based Pedagogical Renaissance",
        content: [
            {
                text: "In a groundbreaking study conducted by the esteemed Center for Education Advance, UFO Sightings and Corruption Prevention, researchers have unearthed remarkable insights into the transformative potential of integrating quizzes into educational practices. Spearheaded by lively Dr. Joe Biden, a prominent cognitive psychologist and WWI veteran, this study offers compelling evidence of how quizzes can reshape the landscape of learning as we know it.",
                type: "text",
            },
            {
                text: "Methodology",
                type: "heading",
            },
            {
                text: "The study spanned across a diverse spectrum of students, including various age groups and academic levels. Most importantly, at least one student from the following diversity groups was included: sumo fighters, future politicians, optimistic Goths, generous Bračanins, Ericsson Nikola Tesla interns. Two groups were carefully formed: the Control Group, following conventional instructional methods, and the Quiz Group, which experienced a carefully curated sequence of quizzes interwoven with the curriculum. Subjects ranged from core subjects like mathematics and chemistry, as well as special topics like extreme origami and advanced napping techniques.",
                type: "text",
            },
            {
                text: "Results",
                type: "heading",
            },
            {
                text: "Ladies and gentlemen, prepare to be flabbergasted by the utterly inconceivable findings of this utterly serious study on the cosmic impact of quizzes in the ethereal realm of education. Dr. Joe Biden said it well himself: „This is a big f**king deal.“",
                type: "text",
            },
            {
                text: "Quantum Leap in Rememberance: The Quiz Group somehow managed to outdo their academic counterparts in the delicate art of memory retrieval. Engaging with quiz content seemed to trigger a mind-bending phenomenon, resulting in memory recall so quick, it could make a turtle on roller skates jealous.",
                type: "text",
            },
            {
                text: "Quiz-o-Nauts Unleash Problem-Solving Wormholes: In a mind-bending twist, the Quiz Group seemed to tap into an alternate dimension of problem-solving prowess. Whenever their normal counterparts solved a given problem with ease, participants transformed into power-hungry Quiz-o-Nauts and simply shoved the competition into a wormhole. How cool is that!",
                type: "text",
            },
            {
                text: "Confidence and Attractiveness Eruption: Quiz-engaged students didn't just sprout confidence; they practically oozed it like a fountain of academic glory. It's said that even Andrew Tate himself, an epitomy of male attractiveness, confessed love to all of the participants and got rejected by all, who instead went on to a party at minister Marić house.",
                type: "text",
            },
            {
                text: "World Hunger Solving: Even though we all expected them to answer „42“ when asked what was the answer to world hunger, participants enlightened us and we finally realised we knew the answer for hundreds of years: „Let them eat cake“.",
                type: "text",
            },
            {
                text: "So, there you have it. Not much else can be said about this study, so let's try to summarize it in a single, simple sentence: Quiz good.",
                type: "text",
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "11/07/2023",
    },
    {
        id: "28c5ca98-1958-4093-898b-84480ffc20bc",
        imageUrl: "/rulesStory.png",
        topic: "Quiz speak",
        description: "6 Must Follow Rules for Perfect Quiz Making",
        content: [
            {
                text: "#1 Captain Obvious Approach",
                type: "heading",
            },
            {
                text: "Think you know what's the color of a yellow banana? Well, guess what – I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?",
                type: "text",
            },
            {
                text: "#2 Variety of Topics",
                type: "heading",
            },
            {
                text: "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.",
                type: "text",
            },
            {
                text: "#3 Points Galore",
                type: "heading",
            },
            {
                text: "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right – get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)",
                type: "text",
            },
            {
                text: "#4 Consistency is Key",
                type: "heading",
            },
            {
                text: "The key is to be consistenly inconsistent!",
                type: "text",
            },
            {
                text: "#5 Don't make promises you can't fulfill",
                type: "heading",
            },
            {
                text: "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?",
                type: "text",
            },
            {
                text: "Now, go forth and make those students tell stories about you to their grandsons!",
                type: "text",
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "07/01/2023",
    },
    {
        id: "755408a9-08ed-4944-8b5a-ab83c9c95a2b",
        imageUrl: "/magicStory.png",
        topic: "Tech speak",
        description: "Magic Behind Qwizard - Next.js Overview",
        content: [
            {
                text: "Why Choose Next.js?",
                type: "heading",
            },
            {
                text: "In the realm of web development, choosing the right framework is crucial. When it comes to building high-performance, SEO-friendly web applications with React, Next.js emerges as an exceptional choice. In this step-by-step guide, we will explore why Next.js is a valuable tool for web development, without delving into specific code examples.",
                type: "text",
            },
            {
                text: "What is Next.js?",
                type: "heading",
            },
            {
                text: "Next.js is a popular React framework that simplifies server-side rendering (SSR) and enhances the developer experience. Here are some compelling reasons to consider Next.js for your next project:",
                type: "text",
            },
            {
                text: "1. Improved Performance: Next.js optimizes your application for speed by automatically splitting JavaScript code. This means users only download the code they need, reducing load times.",
                type: "text",
            },
            {
                text: "2. SEO-Friendly: Search engine optimization (SEO) is essential for web visibility. Next.js provides excellent SEO capabilities through server-side rendering, ensuring search engines can crawl and index your site effectively.",
                type: "text",
            },
            {
                text: "3. Routing Made Easy: Next.js simplifies routing, making it effortless to create dynamic, client-side navigations. You don't have to spend time configuring complex routes; it's all built-in.",
                type: "text",
            },
            {
                text: "4. Server-Side Rendering (SSR): SSR is a game-changer for web applications. It allows you to render pages on the server, resulting in faster initial page loads and improved user experiences.",
                type: "text",
            },
            {
                text: "5. Strong Community Support: Next.js has a thriving community of developers. You can find a wealth of resources, tutorials, and packages to help you tackle any project.",
                type: "text",
            },
            {
                text: "Prerequisites",
                type: "heading",
            },
            {
                text: "Before diving into Next.js, ensure you have the following tools in your developer toolkit:",
                type: "text",
            },
            {
                text: "Node.js and npm: Next.js relies on Node.js, so make sure you have it installed. You can download Node.js from the official website (https://nodejs.org/). npm, the Node.js package manager, comes bundled with Node.js.",
                type: "text",
            },
            {
                text: "Text Editor or IDE: Choose a code editor or integrated development environment (IDE) that suits your workflow. Popular options include Visual Studio Code, Sublime Text, and Atom.",
                type: "text",
            },
            {
                text: "Why Next.js?",
                type: "heading",
            },
            {
                text: "Now that we've introduced Next.js and its benefits let's explore why it's an excellent tool for web development:",
                type: "text",
            },
            {
                text: "1. Enhanced Performance: Next.js optimizes your application's performance by automatically splitting JavaScript bundles. This feature ensures that users download only the necessary code, resulting in faster page loads and a smoother user experience.",
                type: "text",
            },
            {
                text: "2. SEO-Friendly: Search engine optimization is crucial for web applications, and Next.js excels in this regard. With built-in server-side rendering (SSR), your content is readily available to search engines, leading to better rankings and discoverability.",
                type: "text",
            },
            {
                text: "3. Simplified Routing: Next.js simplifies routing. You don't need to configure complex route structures; instead, you define your routes using the pages directory. This simplicity speeds up development and reduces potential routing-related issues.",
                type: "text",
            },
            {
                text: "4. Server-Side Rendering (SSR): SSR is a significant advantage for Next.js. It enables you to render pages on the server, delivering fully formed HTML to the client. This results in faster initial page loads, improved SEO, and a more engaging user experience.",
                type: "text",
            },
            {
                text: "5. Rich Ecosystem: Next.js benefits from a robust ecosystem of libraries and tools. Whether you need authentication, state management, or UI components, you can easily find Next.js-specific packages to streamline your development process.",
                type: "text",
            },
            {
                text: "6. Active Community: Next.js boasts an active and supportive community of developers. You can leverage community-contributed resources, tutorials, and forums to accelerate your learning and troubleshoot issues.",
                type: "text",
            },
            {
                text: "In conclusion, Next.js is an exceptional choice for web development due to its performance optimizations, SEO capabilities, routing simplicity, SSR support, extensive ecosystem, and active community. When building modern web applications, consider Next.js as your go-to framework to deliver high-quality, fast, and SEO-friendly sites.",
                type: "text",
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "02/02/2022",
    },
    {
        id: "7ac9dd5e-43d4-4440-b3d2-a434898c0b97",
        imageUrl: "/quizPsychologyStory.png",
        topic: "Education",
        description: "The Psychology of Quiz-Taking: How to Help Students Overcome Test Anxiety",
        content: [
            {
                text: "Ah, the dreaded quiz! For some students, it's like facing a fire-breathing dragon with a toothpick for a sword. But fear not, dear educators, for we're about to embark on a whimsical journey into the quirky world of quiz psychology, where test anxiety meets a sprinkle of silliness!",
                type: "text",
            },
            {
                text: "The Dramatic Quiz Entrance",
                type: "heading",
            },
            {
                text: "Picture this: Your students enter the quiz room, and instead of tense silence, they're greeted by the soothing sound of a harp-playing unicorn! Okay, maybe unicorns aren't real (or are they?), but setting a positive and whimsical atmosphere can help ease those pre-quiz jitters.",
                type: "text"
            },
            {
                text: "Anti-Test-Anxiety Snacks",
                type: "heading",
            },
            {
                text: "Banish those butterflies with anti-test-anxiety snacks! Why not offer a buffet of calming candies with magical properties? Gummy bears for courage, chocolate frogs for wisdom, and sour patch kids to keep things interesting.",
                type: "text",
            },
            {
                text: "The Sneaky Quiz Mascot",
                type: "heading",
            },
            {
                text: "Introduce your secret weapon: the quiz-taking mascot! Let's call them 'Quizzy the Quizmaster.' Quizzy is your students' quirky, imaginary sidekick, ready to offer witty encouragement and distract anxiety gremlins with whimsical banter.",
                type: "text",
            },
            {
                text: "The Pajama Quiz Party",
                type: "heading",
            },
            {
                text: "Why wear regular clothes when you can have a quiz-taking pajama party? Encourage your students to come to the quiz in their coziest PJs. After all, who can be anxious when wearing fuzzy bunny slippers?",
                type: "text",
            },
            {
                text: "Quizmageddon Soundtrack",
                type: "heading",
            },
            {
                text: "Every quiz needs an epic soundtrack. Cue the Quizmageddon Soundtrack, complete with heroic fanfares for right answers and comical sound effects for 'oops' moments. Think of it as your students' personal quiz score composer.",
                type: "text",
            },
            {
                text: "The Art of Silly Pencils",
                type: "heading",
            },
            {
                text: "Say goodbye to boring No. 2 pencils. Provide students with a selection of whimsical quiz-taking utensils, like rainbow pencils or glittery gel pens. Silly pencils equal silly fun!",
                type: "text",
            },
            {
                text: "Dance Break Interludes",
                type: "heading",
            },
            {
                text: "Incorporate dance breaks between quiz sections to shake off any lingering anxiety. Break out the chicken dance, moonwalk, or your own signature move. It's impossible to be anxious while dancing like nobody's watching.",
                type: "text",
            },
            {
                text: "The Victory Parade",
                type: "heading",
            },
            {
                text: "Celebrate quiz victories with a victory parade around the classroom or, if you're teaching remotely, a virtual parade featuring students' best parade float creations. Let them bask in the glory of their quiz triumphs!",
                type: "text",
            },
            {
                text: "The Balloon Release",
                type: "heading",
            },
            {
                text: "As the quiz concludes, have students write down their worries on balloons, then release them into the wild (or the classroom). Watch those anxieties float away into the quiz-taking abyss.",
                type: "text",
            },
            {
                text: "Remember, the goal here is not just to make quizzes less anxiety-inducing but to infuse a sense of whimsy and fun into the learning process. By embracing the silly side of quiz psychology, you can help your students face their quizzes with courage, creativity, and a big dose of laughter!",
                type: "text"
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "05/01/2022",
    },
    {
        id: "2228deec-e4a6-43d9-9f00-26371bd7f197",
        imageUrl: "/engagingQuizzesStory.png",
        topic: "Education",
        description: "How to Create Engaging and Effective Quizzes for Online Courses",
        content: [
            {
                text: "In the realm of online education, quizzes are the unsung heroes of knowledge assessment. But don't let their serious reputation fool you; there's room for a touch of whimsy in the world of online quizzes. In this blog post, we'll delve into the art of crafting engaging and effective quizzes for your online courses while maintaining a veneer of seriousness, albeit with a hint of silliness.",
                type: "text",
            },
            {
                text: "1. The Quest for the Perfect Question",
                type: "heading",
            },
            {
                text: "Creating quiz questions is a serious business, but why not inject a bit of humor into the process? Instead of asking a straightforward math question, challenge your students to calculate the number of cupcakes needed for an intergalactic bake sale on Mars. The seriousness lies in the math, but the silliness adds a dash of delight.",
                type: "text",
            },
            {
                text: "2. The Mystery of Multiple Choice",
                type: "heading",
            },
            {
                text: "Multiple-choice questions are a staple in online quizzes, and they can be quite serious. However, why not toss in an option like 'The Loch Ness Monster' or 'A ninja unicorn' amidst the usual suspects? It's a subtle reminder that learning can be both serious and a tad whimsical.",
                type: "text",
            },
            {
                text: "3. Timing Is of the Essence",
                type: "heading",
            },
            {
                text: "Setting a time limit for online quizzes is undoubtedly serious business. But why not playfully name your quiz timer something like 'The Relentless Ticking Clock of Destiny'? It adds a hint of drama to the quiz-taking experience.",
                type: "text",
            },
            {
                text: "4. The Art of Feedback",
                type: "heading",
            },
            {
                text: "Providing constructive feedback on quiz answers is crucial for learning. To keep it serious yet slightly silly, consider adding an occasional 'You are as sharp as a pirate's cutlass!' or 'You are getting closer to understanding quantum physics, one electron at a time.' It's feedback with a touch of fun.",
                type: "text"
            },
            {
                text: "5. The Great Scoring Reveal",
                type: "heading",
            },
            {
                text: "When revealing quiz scores, maintain the seriousness of grading, but don't shy away from a cheeky, 'Drumroll, please...' before announcing the results. It's a small gesture that acknowledges the gravity of assessment while adding a playful twist.",
                type: "text",
            },
            {
                text: "6. Achieving Quiz Zen",
                type: "heading",
            },
            {
                text: "Remember that quizzes should align with your course objectives and content. While infusing a bit of silliness can make the learning journey more enjoyable, always ensure that the silliness doesn't overshadow the educational value of your quizzes.",
                type: "text"
            },
            {
                text: "In conclusion, creating engaging and effective quizzes for online courses can be a serious endeavor, but a dash of silliness can make the learning experience more enjoyable and memorable. Just as a well-timed joke can liven up a classroom, infusing quizzes with a touch of humor can foster a positive and engaging online learning environment. So go forth, educators, and craft quizzes that balance the serious and the silly in the quest for knowledge!",
                type: "text"
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "03/03/2022",
    },
    {
        id: "42d29d66-f388-4457-a411-a1d4c5996554",
        imageUrl: "/craftingQuizzesStory.png",
        topic: "Quiz speak",
        description: "Crafting Engaging Quizzes: Choosing the Perfect Subject",
        content: [
            {
                text: "The Art of Quiz Creation",
                type: "heading",
            },
            {
                text: "Quizzes have become a ubiquitous form of interactive content across the internet. They are not only fun and engaging but also a valuable tool for various purposes, including education, marketing, and entertainment. In this guide, we'll explore the importance of selecting the right subject for your quiz to ensure it resonates with your audience.",
                type: "text",
            },
            {
                text: "Why Are Quizzes So Popular?",
                type: "heading",
            },
            {
                text: "Before diving into the subject selection process, let's understand why quizzes are such a hit:",
                type: "text",
            },
            {
                text: "Engagement: Quizzes are interactive and encourage participation. They draw users in and keep them engaged, making them an effective tool for websites and social media platforms.",
                type: "text",
            },
            {
                text: "Knowledge Transfer: Educational quizzes help convey information in an engaging way. They can be used in classrooms, e-learning platforms, or even corporate training programs.",
                type: "text",
            },
            {
                text: "Lead Generation: In the marketing world, quizzes are a powerful lead generation tool. Users willingly share their contact information in exchange for quiz results, providing businesses with valuable leads.",
                type: "text",
            },
            {
                text: "Entertainment: Quizzes can be purely for fun. They challenge users, create friendly competition, and offer an entertaining way to pass the time.",
                type: "text",
            },
            {
                text: "Choosing the Right Subject",
                type: "heading",
            },
            {
                text: "The success of your quiz largely depends on the subject you choose. Here's how to pick the perfect topic:",
                type: "text",
            },
            {
                text: "1. Know Your Audience",
                type: "heading",
            },
            {
                text: "Understanding your target audience is paramount. Consider their interests, preferences, and demographics. Are they students, professionals, hobbyists, or trivia enthusiasts? Tailor your subject to their profile.",
                type: "text",
            },
            {
                text: "2. Relevance",
                type: "heading",
            },
            {
                text: "Ensure your quiz subject aligns with your website's or brand's theme. A quiz about pop culture may be fitting for an entertainment website but not for a financial news platform.",
                type: "text"
            },
            {
                text: "3. Trending Topics",
                type: "heading",
            },
            {
                text: "Staying up-to-date with trending topics can boost the popularity of your quiz. However, avoid topics that may become irrelevant quickly.",
                type: "text",
            },
            {
                text: "4. Educational Value",
                type: "heading"
            },
            {
                text: "If your goal is education, choose subjects that align with your curriculum or learning objectives. Make sure the quiz provides valuable insights or knowledge to your audience.",
                type: "text",
            },
            {
                text: "5. Pop Culture and Entertainment",
                type: "heading",
            },
            {
                text: "These topics often have broad appeal. Subjects like movies, music, celebrities, and sports tend to attract a wide range of participants.",
                type: "text",
            },
            {
                text: "6. Niche Subjects",
                type: "heading",
            },
            {
                text: "For specialized audiences, niche subjects work wonders. Whether it's astrophysics, birdwatching, or vintage car restoration, a niche quiz can attract passionate participants.",
                type: "text",
            },
            {
                text: "7. Problem-Solving and Personality Quizzes",
                type: "heading",
            },
            {
                text: "Consider the type of quiz you want to create. Problem-solving quizzes challenge participants to find solutions, while personality quizzes provide insights into their traits. Choose a subject that suits your quiz type.",
                type: "text",
            },
            {
                text: "8. Seasonal and Holiday Themes",
                type: "heading",
            },
            {
                text: "Creating quizzes tied to holidays, seasons, or special events can boost engagement. People enjoy quizzes that align with the current mood or festivities.",
                type: "text",
            },
            {
                text: "Examples of Engaging Quiz Subjects",
                type: "heading",
            },
            {
                text: "Here are some popular quiz subjects to spark your creativity:",
                type: "text",
            },
            {
                text: "Which Movie Genre Best Describes Your Personality?",
                type: "text",
            },
            {
                text: "Test Your Geography Knowledge: Can You Identify These Capital Cities?",
                type: "text",
            },
            {
                text: "What's Your Ideal Travel Destination Based on Your Preferences?",
                type: "text",
            },
            {
                text: "Discover Your Entrepreneurial Spirit: Which Business Idea Suits You?",
                type: "text",
            },
            {
                text: "The Ultimate Harry Potter Trivia Quiz: Are You a Wizard or Muggle?",
                type: "text"
            },
            {
                text: "Conclusion",
                type: "heading",
            },
            {
                text: "Selecting the right subject is the foundation of a successful quiz. Whether you aim to educate, entertain, or generate leads, understanding your audience and aligning your subject with their interests and preferences is key. With the perfect subject, your quiz can captivate, inform, and engage participants, ensuring a memorable and rewarding experience for all.",
                type: "text",
            }
        ],
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "08/08/2022",
    }
]

export const FEATURED_POST: PostData = {
    id: "bcf0df0f-9268-4862-bf1c-1c9cf34d20b9",
    author: {
        name: "Nikola Tafra",
        about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
    },
    callToAction: "Check out the nearest Pub Quiz Locations Near You!",
    date: "19/07/2023",
    description: "Quizzes are back, and they don't intend to go away anytime soon!",
    topic: "Quiz Speak",
    imageUrl: "/featuredPost.png",
    content: [
        {
            text: "The Resurgence of Quizzes: A Trend That's Here to Stay",
            type: "heading",
        },
        {
            text: "In an age dominated by technology and digital entertainment, the humble quiz has made an extraordinary comeback. From traditional pub quizzes to online trivia games, quizzes are back, and they're not planning to disappear anytime soon. Let's explore the resurgence of quizzes and why they continue to capture our hearts and minds.",
            type: "text",
        },
        {
            text: "The Nostalgia Factor",
            type: "heading",
        },
        {
            text: "Nostalgia plays a significant role in the return of quizzes. Many of us have fond memories of participating in quizzes during our school days or enjoying trivia nights at local pubs. These nostalgic recollections remind us of the joy and camaraderie quizzes bring.",
            type: "text",
        },
        {
            text: "Accessible and Inclusive",
            type: "heading",
        },
        {
            text: "One of the key reasons behind the quiz renaissance is accessibility. The digital age has made it incredibly easy for people to create, share, and participate in quizzes. Social media platforms are flooded with quiz-style content, while dedicated quiz apps and websites offer a wide range of trivia challenges. This accessibility makes quizzes inclusive and available to a global audience.",
            type: "text",
        },
        {
            text: "Engaging Entertainment",
            type: "heading",
        },
        {
            text: "Quizzes are a perfect blend of entertainment and education. They provide a mental workout while keeping participants engaged and entertained. Whether it's testing your knowledge of history, sports, pop culture, or geography, quizzes offer a fun and stimulating experience.",
            type: "text",
        },
        {
            text: "Community and Social Connection",
            type: "heading",
        },
        {
            text: "In an increasingly digital world, quizzes provide an avenue for social interaction and community building. Friends and family can gather for quiz nights, fostering closer bonds and creating lasting memories. Online multiplayer trivia games allow individuals to connect with people worldwide, transcending geographical boundaries.",
            type: "text",
        },
        {
            text: "Learning in Disguise",
            type: "heading",
        },
        {
            text: "Quizzes are an effective way to acquire knowledge without feeling like you're studying. They present information in a playful manner, encouraging participants to absorb facts and trivia naturally. This 'learning in disguise' aspect adds to the appeal of quizzes.",
            type: "text",
        },
        {
            text: "Themed Quizzes and Challenges",
            type: "heading",
        },
        {
            text: "The versatility of quizzes is another reason for their resurgence. From general knowledge quizzes to highly specialized themes, there's a quiz for everyone. Whether you're a movie buff, a sports fanatic, or a science enthusiast, you can find quizzes tailored to your interests.",
            type: "text",
        },
        {
            text: "Healthy Competition",
            type: "heading",
        },
        {
            text: "Quizzes provide a healthy dose of competition. Whether you're playing against friends, colleagues, or strangers, the desire to answer correctly and outscore others adds excitement and motivation.",
            type: "text",
        },
        {
            text: "The Future of Quizzes",
            type: "heading",
        },
        {
            text: "As we look to the future, it's clear that quizzes will remain a prominent form of entertainment and social interaction. With the ongoing development of quiz technology, we can expect more innovative and immersive quiz experiences. Virtual reality quizzes, augmented reality challenges, and interactive live-streamed trivia events are just a glimpse of what's on the horizon.",
            type: "text",
        },
        {
            text: "So, whether you're a quiz aficionado or someone who hasn't participated in a quiz for years, now is the perfect time to embrace this resurgence. Quizzes are back, and they're here to stay, offering an entertaining, educational, and socially fulfilling experience for all. Join the quiz revolution and rediscover the joy of testing your knowledge and wit in this exciting new era of quizzing!",
            type: "text",
        }
    ]
}

export const COMMON_PAGE_PADDING = {
    base: "20px",
    md: "60px",
    lg: "110px",
}

export const QUIZ_CATEGORIES: QuizCategory[] = [{
    id: uuid(),
    name: "General Knowledge",
    imageUrl: "/generalKnowledge.png",
    subcategories: []
},
{
    id: uuid(),
    name: "Arts and Music",
    imageUrl: "/artsAndMusic.png",
    subcategories: ["Pop", "Jazz", "Hip-hop", "Classicism", "Modern art", "Blues", "80s", "Renaissance", "Other"]
},
{
    id: uuid(),
    name: "PC and Technology",
    imageUrl: "/pcAndTechnology.png",
    subcategories: ["Video games", "Programming", "Graphic design", "Electronics", "Other"]
},
{
    id: uuid(),
    name: "Biology and Chemistry",
    imageUrl: "/biologyAndChemistry.png",
    subcategories: ["Chemical elements", "Genetics", "Botany", "Ornithology", "Other"]
},
{
    id: uuid(),
    name: "Sports and Recreation",
    imageUrl: "/sportsAndRecreation.png",
    subcategories: ["Basketball", "Football", "Tennis", "Swimming", "Chess", "Darts", "Hockey", "Volleyball", "Rugby", "Other"]
}
]

export const DEFAULT_ANSWERS: Answer[] = [
    {
        id: uuid(),
        text: "",
        isCorrect: true,
        imageUrl: ""
    },
    {
        id: uuid(),
        text: "",
        isCorrect: false,
        imageUrl: ""
    },
    {
        id: uuid(),
        text: "",
        isCorrect: false,
        imageUrl: ""
    },
    {
        id: uuid(),
        text: "",
        isCorrect: false,
        imageUrl: ""
    }
]

export const BIOLOGY_QUIZZES: QuizData[] = [
    {
        id: "68a1b5eb-2f40-4c00-bf37-e70d5175e393",
        author: "Louise Kirby",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Chemical elements",
        subtitle: "I forget, can we create gold from lead?",
        date: "01/02/2023"
    },
    {
        id: "6f96fc10-6b81-4e34-9e64-43134bbab089",
        author: "Alec Bisset",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Birds and insects",
        subtitle: "Look up in the sky, it's a bird, it's a plane... it's a quiz about birds and insects!",
        date: "02/03/2023",
    },
    {
        id: "9f93d054-6b2f-47e2-87c8-e2eccbef7106",
        author: "Maya Halder",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Genetic Manipulation",
        subtitle: "Which came first, the chicken or the dinosaur?",
        date: "03/04/2023",
    },
    {
        id: "3b1c5148-071a-4a5b-b310-f79c08d1792b",
        author: "Louis Pasteur",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Viruses and bacteria",
        subtitle: "Better have your antibiotics ready. Or maybe antivirals?",
        date: "04/05/2023",
    }
]

export const ART_QUIZZES: QuizData[] = [
    {
        id: "4ef56d8d-cafc-4570-97bf-f346dd60faef",
        author: "Malcolm Comfort",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "JazzQuizz",
        subtitle: "I see trees of green, red roses too...",
        date: "05/06/2023",
    },
    {
        id: "a151ab18-53a3-4dae-9f4f-f0f68ea4dbcf",
        author: "Nathan Antill",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "Famous artists and musicians",
        subtitle: "Claude Mona and Lisa Simpson are two of the most famous artists in the world, right?",
        date: "06/07/2023",
    },
    {
        id: "8e049639-87de-4041-96dc-70e0bdd4c536",
        author: "Heather Hardy",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "Croatian 80s music",
        subtitle: "Is Jacques born yet, my friend?",
        date: "07/08/2023",
    },
    {
        id: "46ee1757-41f0-416f-8892-9645a9974071",
        author: "Helen Lane",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "Modern art",
        subtitle: "Who taped that banana to the wall?",
        date: "01/09/2023",
    }
]

export const TECHNOLOGY_QUIZZES: QuizData[] = [
    {
        id: "0a4cfbb1-572a-40c2-a628-fc817f0ff596",
        author: "Ivan Tomić",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Tech titans challenge",
        subtitle: "Alphabet, B, C, D, Elon, Facebook, G...",
        date: "08/08/2023",
    },
    {
        id: "83f739c5-b3de-4f5e-879f-d7fe4acc1fa9",
        author: "Nikola Tafra",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Programming languages",
        subtitle: "Why don't we have just one programming language? Wouldn't that be easier?",
        date: "01/01/2023",
    },
    {
        id: "11f7f499-89c1-43c4-b09c-f5af8bb75036",
        author: "Elon Musk",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Spaceships",
        subtitle: "I think we can land on the Sun, but only at night so we don't burn.",
        date: "05/05/2023",
    },
    {
        id: "2b8e94c2-db12-4f83-ac02-5bc86d4c0085",
        author: "Janet Thompson",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Electronics",
        subtitle: "What's the difference between a transistor and a resistor?",
        date: "05/01/2023",
    },
]

export const SPORT_QUIZZES: QuizData[] = [
    {
        id: "5baaa3e7-200e-4d53-a180-33e6bf5a0575",
        author: "Bob Bowman",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "Swimming is amazing",
        subtitle: "I'm not biased, I swear!",
        date: "05/10/2022",
    },
    {
        id: "ef38e6be-e6b4-43f6-a91d-0eee94cd7481",
        author: "Daniel Williams",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "NBA teams logo quiz",
        subtitle: "Can you recognize all 30 NBA teams by their logo?",
        date: "10/10/2022",
    },
    {
        id: "8f99a1ce-4c75-4f90-825a-06bce170130a",
        author: "Ian Wright",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "Premier League trivia",
        subtitle: "Why is it called Premier League if it's not the best league in the world? Are others Secondier Leagues?",
        date: "12/12/2022",
    },
    {
        id: "cd22fc68-ab63-4510-9231-d3a38977aa10",
        author: "Carl Lewis",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "Olympics",
        subtitle: "The only quiz where you can win a gold medal!",
        date: "03/10/2022",
    },
]

export const GENERAL_QUIZZES: QuizData[] = [
    {
        id: "098fd893-d9c4-4a59-aeee-dd9c63c9c3d5",
        author: "Ivan Tomić",
        category: QuizCategoryEnum.GENERAL_KNOWLEDGE,
        imageUrl: "/generalKnowledge.png",
        imageDescription: "General knowledge",
        title: "WWII chronicles",
        subtitle: "Winston Churchill who?",
        date: "08/06/2022",
    },
    {
        id: "038f6458-ca48-4f14-9319-72d93d70b6f8",
        author: "Nikola Tafra",
        category: QuizCategoryEnum.GENERAL_KNOWLEDGE,
        imageUrl: "/generalKnowledge.png",
        imageDescription: "General knowledge",
        title: "Buzzfeed Buzzfeed quiz",
        subtitle: "Best Buzzfeed quiz about Buzzfeed - what else could you possibly need?!",
        date: "01/10/2022",
    },
    {
        id: "88f3d4fe-f3ff-49f2-856a-be68d2be8898",
        author: "Gary Stimson",
        category: QuizCategoryEnum.GENERAL_KNOWLEDGE,
        imageUrl: "/generalKnowledge.png",
        imageDescription: "General knowledge",
        title: "Everyday trivia",
        subtitle: "Finally, you can use that knowledge about the number of teeth in a shark's mouth!",
        date: "12/12/2022",
    },
    {
        id: "bb0d2b52-afe0-42d3-a937-c53a225c6ec0",
        author: "Katherine Ross",
        category: QuizCategoryEnum.GENERAL_KNOWLEDGE,
        imageUrl: "/generalKnowledge.png",
        imageDescription: "General knowledge",
        title: "Famous people",
        subtitle: "Hey, I know that guy!",
        date: "11/11/2022",
    },
]

export const QUIZZES: QuizData[] = [
    ...GENERAL_QUIZZES,
    ...SPORT_QUIZZES,
    ...BIOLOGY_QUIZZES,
    ...ART_QUIZZES,
    ...TECHNOLOGY_QUIZZES,
]

export const QUIZ_CREATION_STEPS: QuizCreationStep[] = [
    {
        id: uuid(),
        name: "General Info"
    },
    {
        id: uuid(),
        name: "Quiz Questions",
    },
    {
        id: uuid(),
        name: "Settings"
    }
]

export const HOME_PAGE_TOPICS: Topic[] = [
    {
        id: uuid(),
        name: "Create",
        text: "Unleash Your Inner Spellcrafter! Dive into the Realm of Creativity and Forge Your Own Mystical Quizzes. Craft Questions That Challenge and Inspire, and Conjure Up an Enchanting Experience for Fellow Wizards to Enjoy."
    },
    {
        id: uuid(),
        name: "Play",
        text: "Embark on an Epic Quizventure! Engage in Magical Challenges That Test Your Knowledge and Quick Thinking. Cast Your Answers Wisely as You Traverse Through Captivating Realms of Wizardry.",
    },
    {
        id: uuid(),
        name: "Collaborate",
        text: "Unite Your Magical Prowess With Fellow Conjurers! Unveil the Power of Teamwork as You Co-Create Captivating Quizzes, Blending Your Unique Insights."
    },
    {
        id: uuid(),
        name: "Compete",
        text: "Prove Your Mastery of the Arcane Arts! Engage in Duels of Wit and Wisdom as You Compete Against Other Spellcasters. Rise Through the Ranks, Earn Prestigious Titles, and Rtch Your Name Into the Mystical Scrolls of Qwizardry."
    },
    {
        id: uuid(),
        name: "Learn",
        text: "Expand Your Magical Horizons! Immerse Yourself in a Treasure Trove of Knowledge as You Explore Captivating Quizzes. Delve into an enchanted library of knowledge, where each quiz question is a doorway to discovery.",
    }
]

export const ITEMS_PER_PAGE = 4;