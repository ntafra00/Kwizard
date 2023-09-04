import { FeaturedPostData, FormErrorMessage, FormErrorMessageFunction, NavigationLink, PostData, QuizCategory, Answer, QuizData, QuizCreationStep, Topic } from "@/typings";
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
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "Online Quizzes vs. Traditional Tests: Which is Better for Learning?",
    },
    {
        id: "db4dd02b-9f75-421c-9469-724925fa2d92",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "Gamification in Education: Using Quizzes to Make Learning Fun",
    },
    {
        id: "ca6c58d2-603d-48f5-bc64-210fa5c0ca27",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
    },
    {
        id: "09f7d9a3-7969-4812-a9fa-cab719416a75",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "Unlocking Learning Potential: The Quiz-Based Pedagogical Renaissance",
    },
    {
        id: "d4645c4b-efa4-4e78-864f-5750764fb971",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "6 Must Follow Rules for Perfect Quiz Making",
        content: {
            headings: ["#1 Captain Obvious Approach", "#2 Variety of Topics", "#3 Points Galore", "#4 Consistency is Key", "#5 Don't make promises you can't fulfill"],
            texts: ["Think you know what's the color of a yellow banana? Well, guess what - I still have to ask you! Don't be afraid to ask the simple questions, sometimes the obviousness is so outrageous it circles back to being brilliant! Who knows if the water is really wet?", "Okay, so what if the Quiz Title says „Chemistry“? Does that mean I shouldn't ask about the importance of communication between USA and USSR during the Cold War? NO! Never allow them to let their guard down, that's how you make them adaptable to every surprise. Valueable life lesson.", "Welcome to QuizEducation, where the questions are made up and the points don't matter. Get it right – get a gazzillion points your way! Get it wrong? Well, let's just say someone's student debt isn't going away anytime soon... (Sponsored by Whose Line is it Anyway USA and Colin Mochrie)", "The key is to be consistenly inconsistent!", "#5 Don't make promises you can't fulfill"]
        }
    },
    {
        id: "d755b76d-967f-4617-bb24-1f5068b94909",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
    },
    {
        id: "a1ffc46a-139e-4e5c-8355-da58a8cd7454",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
    },
    {
        id: "bcf0df0f-9268-4862-bf1c-1c9cf34d20b9",
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma",
    },
]

export const FEATURED_POST: FeaturedPostData = {
    id: uuid(),
    author: "Nikola Tafra",
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
    subcategories: []
},
{
    id: uuid(),
    name: "PC and Technology",
    imageUrl: "/pcAndTechnology.png",
    subcategories: []
},
{
    id: uuid(),
    name: "Biology and Chemistry",
    imageUrl: "/biologyAndChemistry.png",
    subcategories: []
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

export const QUIZZES: QuizData[] = [
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    },
    {
        id: uuid(),
        author: "Author",
        category: "Category",
        imageUrl: "wizard.png",
        title: "TitleText",
        subtitle: "SubtitleText",
    }
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