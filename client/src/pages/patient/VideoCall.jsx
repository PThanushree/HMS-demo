// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from 'react';
// import { Phone, Video, Mic, MicOff, PhoneOff, Settings, User, CheckCircle, XCircle, Clock, Calendar } from 'lucide-react';

// const VideoCallAppointment = () => {
//   const [callStatus, setCallStatus] = useState('scheduled'); // 'scheduled', 'joining', 'in-progress', 'ended'
//   const [micMuted, setMicMuted] = useState(false);
//   const [videoOff, setVideoOff] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const localVideoRef = useRef(null);
//   const remoteVideoRef = useRef(null);
//   const [appointmentDetails, setAppointmentDetails] = useState({
//     doctor: 'Dr. Sarah Johnson',
//     specialty: 'Cardiology',
//     date: 'June 15, 2023',
//     time: '2:00 PM - 2:30 PM',
//     patient: 'Alex Smith',
//     meetingId: 'xyz-123-456'
//   });

//   // Mock video streams
//   useEffect(() => {
//     if (callStatus === 'in-progress') {
//       // In a real app, you would implement actual WebRTC streams here
//       setTimeout(() => {
//         if (localVideoRef.current) {
//           localVideoRef.current.srcObject = new MediaStream();
//         }
//         if (remoteVideoRef.current) {
//           remoteVideoRef.current.srcObject = new MediaStream();
//         }
//       }, 500);
//     }
//   }, [callStatus]);

//   const handleJoinCall = () => {
//     setCallStatus('joining');
//     setTimeout(() => setCallStatus('in-progress'), 1000);
//   };

//   const handleEndCall = () => {
//     setCallStatus('ended');
//     if (localVideoRef.current?.srcObject) {
//       localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
//     }
//     if (remoteVideoRef.current?.srcObject) {
//       remoteVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen().catch(err => {
//         console.error(`Error attempting to enable fullscreen: ${err.message}`);
//       });
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       {sidebarOpen && (
//         <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-lg font-semibold text-gray-800">Appointment Details</h2>
//             <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-700">
//               <XCircle size={20} />
//             </button>
//           </div>

//           <div className="flex items-center mb-4">
//             <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
//               <User className="text-blue-600" size={24} />
//             </div>
//             <div>
//               <p className="font-medium text-gray-800">{appointmentDetails.doctor}</p>
//               <p className="text-sm text-gray-500">{appointmentDetails.specialty}</p>
//             </div>
//           </div>

//           <div className="space-y-4 mb-6">
//             <div className="flex items-center text-gray-600">
//               <Calendar className="mr-2 text-gray-500" size={16} />
//               <span>{appointmentDetails.date}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Clock className="mr-2 text-gray-500" size={16} />
//               <span>{appointmentDetails.time}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <User className="mr-2 text-gray-500" size={16} />
//               <span>{appointmentDetails.patient}</span>
//             </div>
//           </div>

//           <div className="bg-blue-50 p-3 rounded-lg mb-6">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-sm font-medium text-gray-700">Meeting ID</h3>
//               <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{appointmentDetails.meetingId}</span>
//             </div>
//             <p className="text-xs text-gray-500">Share this ID with others to join</p>
//           </div>

//           {callStatus === 'scheduled' && (
//             <button
//               onClick={handleJoinCall}
//               className="mt-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
//             >
//               <Video className="mr-2" size={16} />
//               Join Appointment
//             </button>
//           )}

//           {callStatus === 'ended' && (
//             <div className="mt-auto p-3 bg-red-50 rounded-lg text-center">
//               <CheckCircle className="mx-auto text-green-500 mb-1" size={20} />
//               <p className="text-sm text-gray-700">Call ended</p>
//               <p className="text-xs text-gray-500">Duration: 24 minutes</p>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Main Content */}
//       <div className={`flex-1 ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'relative'}`}>
//         {/* Video Container */}
//         <div className="relative h-full w-full bg-gray-800 overflow-hidden">
//           {callStatus === 'scheduled' && (
//             <div className="flex flex-col items-center justify-center h-full text-white">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <Video className="text-blue-600" size={32} />
//               </div>
//               <h1 className="text-2xl font-semibold mb-2">Appointment Scheduled</h1>
//               <p className="text-gray-300 mb-6">{appointmentDetails.time}</p>
//               <button
//                 onClick={handleJoinCall}
//                 className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg flex items-center"
//               >
//                 <Video className="mr-2" size={16} />
//                 Join Now
//               </button>
//             </div>
//           )}

//           {callStatus === 'joining' && (
//             <div className="flex flex-col items-center justify-center h-full text-white">
//               <div className="animate-pulse">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <Video className="text-blue-600" size={32} />
//                 </div>
//               </div>
//               <h1 className="text-2xl font-semibold mb-2">Connecting...</h1>
//               <p className="text-gray-300">Joining {appointmentDetails.doctor}</p>
//             </div>
//           )}

//           {callStatus === 'in-progress' && (
//             <>
//               {/* Remote Video */}
//               <div className="absolute inset-0">
//                 <video
//                   ref={remoteVideoRef}
//                   autoPlay
//                   playsInline
//                   className="h-full w-full object-cover"
//                 />
//                 {videoOff && (
//                   <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
//                     <div className="text-white text-center">
//                       <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
//                         <User size={40} className="text-gray-400" />
//                       </div>
//                       <p className="text-xl font-medium">{appointmentDetails.doctor}</p>
//                       <p className="text-gray-400 text-sm">Video is turned off</p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Local Video */}
//               <div className="absolute bottom-4 right-4 w-48 h-36 rounded-lg overflow-hidden shadow-lg bg-black">
//                 <video
//                   ref={localVideoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="h-full w-full object-cover"
//                 />
//                 {micMuted && (
//                   <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
//                     <MicOff size={16} className="text-white" />
//                   </div>
//                 )}
//               </div>

//               {/* Call Controls */}
//               <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
//                 <button
//                   onClick={() => setMicMuted(!micMuted)}
//                   className={`p-3 rounded-full ${micMuted ? 'bg-gray-600 text-white' : 'bg-white text-gray-700'}`}
//                 >
//                   {micMuted ? <MicOff size={20} /> : <Mic size={20} />}
//                 </button>
//                 <button
//                   onClick={() => setVideoOff(!videoOff)}
//                   className={`p-3 rounded-full ${videoOff ? 'bg-gray-600 text-white' : 'bg-white text-gray-700'}`}
//                 >
//                   {videoOff ? <Video size={20} className="text-gray-400" /> : <Video size={20} />}
//                 </button>
//                 <button
//                   onClick={toggleFullscreen}
//                   className="p-3 rounded-full bg-white text-gray-700"
//                 >
//                   <Settings size={20} />
//                 </button>
//                 <button
//                   onClick={handleEndCall}
//                   className="p-3 rounded-full bg-red-500 text-white transform hover:scale-110 transition-transform"
//                 >
//                   <PhoneOff size={20} />
//                 </button>
//               </div>
//             </>
//           )}

//           {callStatus === 'ended' && (
//             <div className="flex flex-col items-center justify-center h-full text-white">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                 <CheckCircle className="text-green-500" size={32} />
//               </div>
//               <h1 className="text-2xl font-semibold mb-2">Call Ended</h1>
//               <p className="text-gray-300 mb-6">Duration: 24 minutes</p>
//               <div className="flex space-x-4">
//                 <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
//                   View Summary
//                 </button>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
//                   Schedule Follow Up
//                 </button>
//               </div>
//             </div>
//           )}

//           {!sidebarOpen && (
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md"
//             >
//               <Settings size={20} />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCallAppointment;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Video,
  Mic,
  MicOff,
  PhoneOff,
  Settings,
  User,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
} from 'lucide-react';

const VideoCallAppointment = () => {
  const [callStatus, setCallStatus] = useState('scheduled'); // 'scheduled', 'joining', 'in-progress', 'ended'
  const [micMuted, setMicMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    date: 'June 15, 2023',
    time: '2:00 PM - 2:30 PM',
    patient: 'Alex Smith',
    meetingId: 'xyz-123-456',
  });

  useEffect(() => {
    if (callStatus === 'in-progress') {
      setTimeout(() => {
        if (localVideoRef.current) localVideoRef.current.srcObject = new MediaStream();
        if (remoteVideoRef.current) remoteVideoRef.current.srcObject = new MediaStream();
      }, 500);
    }
  }, [callStatus]);

  const handleJoinCall = () => {
    setCallStatus('joining');
    setTimeout(() => setCallStatus('in-progress'), 1000);
  };

  const handleEndCall = () => {
    setCallStatus('ended');
    if (localVideoRef.current?.srcObject) {
      localVideoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
    if (remoteVideoRef.current?.srcObject) {
      remoteVideoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Appointment Details</h2>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-700">
              <XCircle size={20} />
            </button>
          </div>

          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-3">
              <User className="text-sky-600" size={24} />
            </div>
            <div>
              <p className="font-medium text-gray-800">{appointmentDetails.doctor}</p>
              <p className="text-sm text-gray-500">{appointmentDetails.specialty}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 text-gray-500" size={16} />
              <span>{appointmentDetails.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="mr-2 text-gray-500" size={16} />
              <span>{appointmentDetails.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="mr-2 text-gray-500" size={16} />
              <span>{appointmentDetails.patient}</span>
            </div>
          </div>

          <div className="bg-sky-50 p-3 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-700">Meeting ID</h3>
              <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded">
                {appointmentDetails.meetingId}
              </span>
            </div>
            <p className="text-xs text-gray-500">Share this ID with others to join</p>
          </div>

          {callStatus === 'scheduled' && (
            <button
              onClick={handleJoinCall}
              className="mt-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <Video className="mr-2" size={16} />
              Join Appointment
            </button>
          )}

          {callStatus === 'ended' && (
            <div className="mt-auto p-3 bg-red-50 rounded-lg text-center">
              <CheckCircle className="mx-auto text-green-500 mb-1" size={20} />
              <p className="text-sm text-gray-700">Call ended</p>
              <p className="text-xs text-gray-500">Duration: 24 minutes</p>
            </div>
          )}
        </div>
      )}

      {/* Main Video Area */}
      <div className={`flex-1 ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'relative'}`}>
        <div className="relative h-full w-full bg-gray-800 overflow-hidden">
          {/* Scheduled View */}
          {callStatus === 'scheduled' && (
            <div className="flex flex-col items-center justify-center h-full text-white">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Video className="text-sky-600" size={32} />
              </div>
              <h1 className="text-2xl font-semibold mb-2">Appointment Scheduled</h1>
              <p className="text-gray-300 mb-6">{appointmentDetails.time}</p>
              <button
                onClick={handleJoinCall}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg flex items-center"
              >
                <Video className="mr-2" size={16} />
                Join Now
              </button>
            </div>
          )}

          {/* Joining View */}
          {callStatus === 'joining' && (
            <div className="flex flex-col items-center justify-center h-full text-white">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Video className="text-sky-600" size={32} />
                </div>
              </div>
              <h1 className="text-2xl font-semibold mb-2">Connecting...</h1>
              <p className="text-gray-300">Joining {appointmentDetails.doctor}</p>
            </div>
          )}

          {/* In-Call View */}
          {callStatus === 'in-progress' && (
            <>
              <div className="absolute inset-0">
                <video ref={remoteVideoRef} autoPlay playsInline className="h-full w-full object-cover" />
                {videoOff && (
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                        <User size={40} className="text-gray-400" />
                      </div>
                      <p className="text-xl font-medium">{appointmentDetails.doctor}</p>
                      <p className="text-gray-400 text-sm">Video is turned off</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 right-4 w-48 h-36 rounded-lg overflow-hidden shadow-lg bg-black">
                <video ref={localVideoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
                {micMuted && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
                    <MicOff size={16} className="text-white" />
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
                <button
                  onClick={() => setMicMuted(!micMuted)}
                  className={`p-3 rounded-full ${micMuted ? 'bg-gray-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  {micMuted ? <MicOff size={20} /> : <Mic size={20} />}
                </button>
                <button
                  onClick={() => setVideoOff(!videoOff)}
                  className={`p-3 rounded-full ${videoOff ? 'bg-gray-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  {videoOff ? <Video size={20} className="text-gray-400" /> : <Video size={20} />}
                </button>
                <button onClick={toggleFullscreen} className="p-3 rounded-full bg-white text-gray-700">
                  <Settings size={20} />
                </button>
                <button
                  onClick={handleEndCall}
                  className="p-3 rounded-full bg-red-500 text-white transform hover:scale-110 transition-transform"
                >
                  <PhoneOff size={20} />
                </button>
              </div>
            </>
          )}

          {/* Call Ended */}
          {callStatus === 'ended' && (
            <div className="flex flex-col items-center justify-center h-full text-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-green-500" size={32} />
              </div>
              <h1 className="text-2xl font-semibold mb-2">Call Ended</h1>
              <p className="text-gray-300 mb-6">Duration: 24 minutes</p>
              <div className="flex space-x-4">
                <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
                  View Summary
                </button>
                <button className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg">
                  Schedule Follow Up
                </button>
              </div>
            </div>
          )}

          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md"
            >
              <Settings size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCallAppointment;
