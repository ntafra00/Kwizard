import { FeaturedPostData, FormErrorMessage, FormErrorMessageFunction, NavigationLink, PostData, QuizCategory } from "@/typings";
const COMMON_LINKS: NavigationLink[] = [{ text: "Quizzes", path: "quizzes" }, { text: "Stories", path: "stories" }, { text: "About us", path: "aboutUs" }]

export const AUTHORIZED_LINKS: NavigationLink[] = [...COMMON_LINKS, { text: "Profile", path: "profile" }, { text: "Sign out", path: "" }];
export const NON_AUTHORIZED_LINKS: NavigationLink[] = [...COMMON_LINKS, { text: "Login", path: "" }, { text: "Register", path: "" }];

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
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
    {
        imageUrl: "storyCat.png",
        topic: "Quiz speak",
        description: "stvarno nemas pojma"
    },
]

export const FEATURED_POST: FeaturedPostData = {
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
    name: "General Knowledge",
    imageUrl: "generalKnowledge.png",
    subcategories: []
},
{
    name: "Arts and Music",
    imageUrl: "artsAndMusic.png",
    subcategories: []
},
{
    name: "PC and Technology",
    imageUrl: "pcAndTechnology.png",
    subcategories: []
},
{
    name: "Biology and Chemistry",
    imageUrl: "biologyAndChemistry.png",
    subcategories: []
},
{
    name: "Sports and Recreation",
    imageUrl: "sportsAndRecreation.png",
    subcategories: ["Basketball", "Football", "Tennis", "Swimming", "Chess", "Darts", "Hockey", "Volleyball", "Rugby", "Other"]
}
]