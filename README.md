# AI Chat Application UI

This project is a user interface for an AI chat application, designed to facilitate interactions with an AI model. The application allows users to send prompts and receive responses in a conversational format, simulating a chat experience.

## Features

- User-friendly interface for chatting with AI.
- Example prompts to help users get started.
- Typing animation effect for a more engaging experience.
- Status indicators for loading and error states.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/ai-chat.git
   cd ai-chat
   ```

2. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Define Environment Variables**:
   Create a `.env` file in the root of the project and define your Gemini API key. The file should look like this:

   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

4. **Get Your Gemini API Key**:
   - Sign up or log in to the [Google AI Studio](https://ai.google.dev/gemini-api/docs/api-key).
   - Click Get a Gemini API key in Google AI Studio.
   - Generate a new API key and copy it.
   - Paste the key into your `.env` file as shown above.

## Running the Project

To start the development server, run the following command:

```bash
npm run dev
# or
yarn dev
```

This will start the application on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to see the application in action.
