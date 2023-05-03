const BACKEND = "https://study-helper-ai-backend.onrender.com/";

// Login APIs
export const EmailLoginAPI = `${BACKEND}api/login`;
//Req Params = email --- Res = userDoc{email, otp}

export const EmailVerifyAPI = `${BACKEND}api/verify`;
//Req Params = email , otp --- Res = message

// Chat APIs
export const GetResponseAPI = `${BACKEND}chat/getresponse`;
//Req Params = email, message, chatId, subject --- Res = ChatDoc[{email , chatId, chatTitle, chatData{timestamp,subject, message, response},...]}

export const GetChatAPI = `${BACKEND}chat/getchat`;
//Req Params = email, chatId, chatTitle --- Res = ChatDoc[{email , chatId, chatTitle, chatData{timestamp,subject, message, response},...]}

export const updateTitleAPI = `${BACKEND}chat/updatetitle`;
//Req Params = email, chatId, chatTitle --- Res = ChatDoc[{email , chatId, chatTitle, chatData{timestamp,subject, message, response},...}]

export const deleteChatAPI = `${BACKEND}chat/deletechat`;
//Req Params = email, chatId, chatTitle --- Res = message

export const getAllChatsAPI = `${BACKEND}chat/getallchat`;
//Req Params = email --- Res = All chats Array[ChatDoc[{email , chatId, chatTitle, chatData{timestamp,subject, message, response},...}],ChatDoc[{email , chatId, chatTitle, chatData{timestamp,subject, message, response},...}]]
