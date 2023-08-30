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
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        id: uuid(),
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
]

export const FEATURED_POST: FeaturedPostData = {
    id: uuid(),
    author: "Nikola Tafra",
    callToAction: "Check out the nearest Pub Quiz Locations Near You!",
    date: "19/07/2023",
    description: "Quizzes are back, and they don't intend to go away anytime soon!",
    topic: "Quiz Speak",
    imageUrl: "featuredPost.png"
}

export const COMMON_PAGE_PADDING = {
    base: "20px",
    md: "60px",
    lg: "110px",
}

export const QUIZ_CATEGORIES: QuizCategory[] = [{
    id: uuid(),
    name: "General Knowledge",
    imageUrl: "generalKnowledge.png",
    subcategories: []
},
{
    id: uuid(),
    name: "Arts and Music",
    imageUrl: "artsAndMusic.png",
    subcategories: []
},
{
    id: uuid(),
    name: "PC and Technology",
    imageUrl: "pcAndTechnology.png",
    subcategories: []
},
{
    id: uuid(),
    name: "Biology and Chemistry",
    imageUrl: "biologyAndChemistry.png",
    subcategories: []
},
{
    id: uuid(),
    name: "Sports and Recreation",
    imageUrl: "sportsAndRecreation.png",
    subcategories: ["Basketball", "Football", "Tennis", "Swimming", "Chess", "Darts", "Hockey", "Volleyball", "Rugby", "Other"]
}
]

export const DEFAULT_ANSWERS: Answer[] = [
    {
        id: uuid(),
        text: "",
        isCorrect: true,
    },
    {
        id: uuid(),
        text: "",
        isCorrect: false,
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
    },
    {
        id: uuid(),
        name: "Play",
    },
    {
        id: uuid(),
        name: "Collaborate",
    },
    {
        id: uuid(),
        name: "Compete",
    },
    {
        id: uuid(),
        name: "Learn"
    }
]