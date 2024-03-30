## SMS-sender
An sms platform built using NodeJs, express and EJS that allows a user send bulk messages to a list of contacts, the user is also able to see a history of messages sent and send messages to a set of associated recipients using a template. 

# Features
1. <strong>Send Messages to Multiple Recipients</strong>: Users can send SMS messages to multiple mobile numbers at once.
2. <strong>Message Templates</strong>: Users can create message templates and associate mobile numbers with them.
3. <strong>Quick Message Sending</strong>: Templates allow users to quickly send a message with just a tap of a button.
4. <strong>Message Controls</strong>: Users have access to controls like editing messages before sending or sending immediately.
5. <strong>Message History</strong>: Users can view a history of sent SMS messages and have control buttons like resend and edit before sending.

# Prerequisuites
Before running the application you should have the following installed:
1. NodeJs
2. MySQL
3. VScode (or your preferred work environment)

# Getting started
1. Clone the project
 
   ```
   git clone https://github.com/Ayine-nongre/SMS-sender.git
   ```
2. Change to project directory

    ```
    cd SMS-sender/
    ```
3. Set up enviroment variables in env file

   ```
   DB_USER, DB_PASSWD, DB_HOST, DB_PORT, PRIVATEKEY, USERNAME, APIKEY
   ```
4. Install packages used in project

   ```
   npm install
   ```
5. Start server

    ```
    nodemon app.js
    ```

# Usage
1. <strong>Create Message Template</strong>: Visit the templates to create a message template. Provide a template name, message content, and mobile numbers (comma-separated, begin numbers with country code).
2. <strong>View Message History</strong>: Navigate to the history page to view the history of sent messages. You can see details such as message content, mobile numbers, and sent timestamps. You can also resend message or edit before sending.
3. <strong>Send Messages</strong>: Select a template from the templates page and click "Send" to send the message to the associated mobile numbers or generate a new message in the send sms page and click "Send" to send message.
