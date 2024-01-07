Multi-Language Translations: Translate text from one language into any number of other languages!

Powered by the Google Translate API, you can select multiple destination languages for simultaneous translation.

# Project Purpose and Goal

This was one of my earliest attempts at a completely solo React app (i.e. no designs or structured guidance whatsoever), and my goal was to build an app that served a personal interest, but which I had not seen in another app.

I thought of the idea while traveling in South America in 2022-23. 

In an effort to learn Portuguese while reinforcing my knowledge of Spanish, whenever I would look up an English word or phrase in one language, I would subsequently translate it into the other. 

An app like this seemed useful to me as a learner to see the Spanish and Portuguese side by side, and would save me the additional step of translating into the second language in a separate transaction.

# Main Challenge: Handling Concurrent API Calls

This app uses Google Translate’s API via a third-party endpoint on RapidAPI (I used this API because it has a free tier, whereas the official Google Translate API is never free for developers).

The API endpoint I’m using does not support batch calls or multiple input strings, so each request must be an independent API call. 

## Solution: A Single State Var to Trigger API Calls

To avoid quickly burning through my free-tier API call limit, I couldn’t trigger the API calls `onChange` of the input field, as the real Google Translate app does. As such, I needed a manual trigger that would translate into all output languages simultaneously.  

- I created a state variable within a React Context provider, and imported it into the input query component and all translation output components created by the user. 

- When that variable changes, it triggers the API call from each output component, which returns a Promise with the translated text. 

I chose this approach because it seemed more manageable than having a central function where all API calls are sent from, and which must then parse any responses and deliver them to the correct output component for display.

With my approach, each output component is independent, but driven by the shared trigger via Context.

# Lessons Learned

## Intro to Backend Basics - Express.js and Environment Variables

My React education prior to this included nothing about handling API credential security on the front end. I realized this would be an issue after building out the API logic, and considering that my credentials were hard coded into my API calling function, which would be exposed to the client.

Looking up how to resolve this security concern led me to learning about .env variables, but also how that was insufficient if running on the front end. 

Finally, I found a tutorial on how to resolve this by creating an Express.js server as a simple backend to handle incoming requests, and how to set environment variables with the hosting provider (in my case, Railway) to keep credentials safe from inspection on the client side.
