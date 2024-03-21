import { VscSearch } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { PiChatsCircleLight } from "react-icons/pi";
import { CgInfo } from "react-icons/cg";
import { BsChat } from "react-icons/bs";
import { TbUpload } from "react-icons/tb";
import { LuSendHorizonal } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { useAuth } from "./AuthContext";
// import { useNavigate } from "react-router-dom";

function Chat() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // const navigate = useNavigate()
  // const auth = useAuth();
  // if (!auth?.isAuthenticated) {
  //   navigate('/login')

  // }


  useEffect(() => {
    const initWebSocket = async () => {
      const ws = new WebSocket('wss://lpi81ka267.execute-api.us-west-2.amazonaws.com/Test/');

      ws.onopen = () => {
        console.log('WebSocket connected');

        // Example: Send a message to the server
        ws.send('Hello from client');
      };

      ws.onmessage = (event) => {
        console.log('Message received:', event.data);

        // Example: Handle incoming message
        const message = JSON.parse(event.data);
        // Do something with the message...
        console.log('Message:', message)
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        console.log('WebSocket closed');
      };
    }
    initWebSocket();
  })

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {isSidebarVisible && (
        <div
          className={`transition-transform transform duration-300 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"
            } h-full w-[20%] lg:flex flex-col justify-between bg-slate-100 p-4`}
        >
          <div className="flex items-center justify-between">
            <button className="p-3 rounded-lg flex items-center gap-2 h-14 bg-blue-500 text-white">
              <VscSearch className="text-white" />
              New Conversation
            </button>
            <button onClick={toggleSidebar} className="text-blue-500 text-2xl">
              <RxCross2 />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <PiChatsCircleLight className="text-gray-700 text-[5rem]" />
            <div className="text-gray-500 text-center">
              <p>Saved conversations appear here.</p>
              <p>Each one is stored for thirty days.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CgInfo className="text-blue-500 text-2xl" />
            <p className="text-gray-500">Help</p>
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center p-4">
          <h1 className="text-4xl font-bold text-blue-500 mb-2">Amazon Q</h1>
          <p className="font-bold text-gray-600 text-center mb-4">
            Your Generative AI assistant is here.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-[3rem] h-[3rem] bg-purple-700 flex items-center justify-center rounded-full">
              <BsChat className="text-3xl text-white" />
            </div>
            <div className="max-w-xl w-full flex items-center justify-center p-4 rounded-lg shadow-md border-2 border-gray-500">
              <p className="text-gray-500 text-sm py-3 font-semibold">
                I am your AI assistant. Enter a prompt to start a conversation.
                I'll respond using data from within your organization.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="flex items-center justify-center gap-1 mb-2">
            <div className="flex items-center justify-center w-[3rem] h-14 rounded-lg border border-blue-500 cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white text-2xl">
              <TbUpload className="font-bold" />
            </div>
            <div className="relative w-full lg:w-[80%] flex items-center">
              <input
                type="text"
                placeholder="Enter a prompt"
                className="w-full h-14 pl-4 pr-20 rounded-lg border-2 border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <div className="flex items-center justify-center h-10 p-4 border border-gray-500 rounded cursor-pointer hover:bg-blue-700 group">
                  <LuSendHorizonal className="text-gray-500 text-2xl hover:text-white group-hover:text-white duration-100 transition-all" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 flex items-center justify-center ">
            Amazon Q - Preview uses generative AI and it may give inaccurate or
            inappropriate responses. For more information:
            <span className="ml-2 text-blue-500 flex gap-5 items-center cursor-pointer">
              AWS Responsible AI <FaExternalLinkAlt className="text-xs" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
