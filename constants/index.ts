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
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "Online Quizzes vs. Traditional Tests: Which is Better for Learning?",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "db4dd02b-9f75-421c-9469-724925fa2d92",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "Gamification in Education: Using Quizzes to Make Learning Fun",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "ca6c58d2-603d-48f5-bc64-210fa5c0ca27",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "09f7d9a3-7969-4812-a9fa-cab719416a75",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "Unlocking Learning Potential: The Quiz-Based Pedagogical Renaissance",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "d4645c4b-efa4-4e78-864f-5750764fb971",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "6 Must Follow Rules for Perfect Quiz Making",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "d755b76d-967f-4617-bb24-1f5068b94909",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "a1ffc46a-139e-4e5c-8355-da58a8cd7454",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
    {
        id: "bcf0df0f-9268-4862-bf1c-1c9cf34d20b9",
        imageUrl: "/storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right - get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "Such as creating a blog post and saying there will be 6 rules. Good riddance, eh?"]
        },
        author: {
            name: "Nikola Tafra",
            about: "By day, a serious PHP developer. By night, also weird. Still struggles to accept defeat in Croatian TV show “Chase” last year."
        },
        date: "19/07/2023",
    },
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
    imageUrl: "featuredPost.png",
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
        subtitle: "Have you ever heard of Einsteinium?",
        date: "01/02/2023"
    },
    {
        id: "6f96fc10-6b81-4e34-9e64-43134bbab089",
        author: "Alec Bisset",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Birds",
        subtitle: "Birds are magnificent. Test your knowledge",
        date: "02/03/2023",
    },
    {
        id: "9f93d054-6b2f-47e2-87c8-e2eccbef7106",
        author: "Maya Halder",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Genetics",
        subtitle: "All that you ever wanted to know about genetics",
        date: "03/04/2023",
    },
    {
        id: "3b1c5148-071a-4a5b-b310-f79c08d1792b",
        author: "Louis Pasteur",
        category: QuizCategoryEnum.BIOLOGY_AND_CHEMISTRY,
        imageUrl: "/biologyAndChemistry.png",
        imageDescription: "Biology and chemistry",
        title: "Viruses and bacteria",
        subtitle: "Better have your antibiotics ready. Or maybe not?",
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
        subtitle: "All about jazz",
        date: "05/06/2023",
    },
    {
        id: "a151ab18-53a3-4dae-9f4f-f0f68ea4dbcf",
        author: "Nathan Antill",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "Renaissance",
        subtitle: "Test your knowledge if you know who painted Mona Lisa",
        date: "06/07/2023",
    },
    {
        id: "8e049639-87de-4041-96dc-70e0bdd4c536",
        author: "Heather Hardy",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "80s",
        subtitle: "If you were part of the greatest music era, then this quiz is for you",
        date: "07/08/2023",
    },
    {
        id: "46ee1757-41f0-416f-8892-9645a9974071",
        author: "Helen Lane",
        category: QuizCategoryEnum.ARTS_AND_MUSIC,
        imageUrl: "/artsAndMusic.png",
        imageDescription: "Arts and music",
        title: "Modern art",
        subtitle: "Test your knowledge if you know that urinal can also be called fountain",
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
        subtitle: "This quiz should cover everything that you ever wanted to know about tech titans",
        date: "08/08/2023",
    },
    {
        id: "83f739c5-b3de-4f5e-879f-d7fe4acc1fa9",
        author: "Nikola Tafra",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Programming languages",
        subtitle: "Python is not only a snake? Java is not short for Javascript?",
        date: "01/01/2023",
    },
    {
        id: "11f7f499-89c1-43c4-b09c-f5af8bb75036",
        author: "Elon Musk",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Spaceships",
        subtitle: "Test if you're ready to visit Mars",
        date: "05/05/2023",
    },
    {
        id: "2b8e94c2-db12-4f83-ac02-5bc86d4c0085",
        author: "Janet Thompson",
        category: QuizCategoryEnum.PC_AND_TECHNOLOGY,
        imageUrl: "/pcAndTechnology.png",
        imageDescription: "PC and technology",
        title: "Electronics",
        subtitle: "How many legs does transistor have? Why is band from Australia called AC/DC?",
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
        subtitle: "Test your knowledge about swimming related stuff",
        date: "05/10/2022",
    },
    {
        id: "ef38e6be-e6b4-43f6-a91d-0eee94cd7481",
        author: "Daniel Williams",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "NBA teams logo quiz",
        subtitle: "Which team has leprechaun in it's logo? Sounds familiar? Let's see how good you are",
        date: "10/10/2022",
    },
    {
        id: "8f99a1ce-4c75-4f90-825a-06bce170130a",
        author: "Ian Wright",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "Premier League trivia",
        subtitle: "Test your knowledge about the greatest soccer league in the world",
        date: "12/12/2022",
    },
    {
        id: "cd22fc68-ab63-4510-9231-d3a38977aa10",
        author: "Carl Lewis",
        category: QuizCategoryEnum.SPORTS_AND_RECREATION,
        imageUrl: "/sportsAndRecreation.png",
        imageDescription: "Sports and recreation",
        title: "Olympics",
        subtitle: "Be ready cause this quiz will test everything you know about both summer and winter Olympics",
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
        subtitle: "If you had A in History, don't be afraid to take this quiz",
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
        subtitle: "Test your knowledge about everyday stuff with a quiz that's suitable for all ages",
        date: "12/12/2022",
    },
    {
        id: "bb0d2b52-afe0-42d3-a937-c53a225c6ec0",
        author: "Katherine Ross",
        category: QuizCategoryEnum.GENERAL_KNOWLEDGE,
        imageUrl: "/generalKnowledge.png",
        imageDescription: "General knowledge",
        title: "Famous persons",
        subtitle: "Quiz with plenty of images, quotes and affairs",
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