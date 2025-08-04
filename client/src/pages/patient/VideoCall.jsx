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
import React, { useState } from 'react';
import {
  User,
  Calendar,
  Clock,
  FileText,
  Hospital,
  CheckCircle2,
  XCircle,
  ChevronDown,
  AlertCircle,
  Video,
} from 'lucide-react';

const AppointmentBookingSystem = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    appointmentType: 'online',
    date: '',
    time: '',
    reason: '',
    medicalHistory: '',
    insuranceProvider: ''
  });
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [selectedTab, setSelectedTab] = useState('details');
  const [showHistoryForm, setShowHistoryForm] = useState(false);

  const doctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiology', availableDays: ['Mon', 'Wed', 'Fri'] },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Neurology', availableDays: ['Tue', 'Thu', 'Sat'] },
    { id: '3', name: 'Dr. Emily Rodriguez', specialty: 'Pediatrics', availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.doctor || !formData.date || !formData.time) {
      alert('Please fill all required fields');
      return;
    }
    setAppointmentBooked(true);
  };

  const handleEditAppointment = () => {
    setAppointmentBooked(false);
  };

  const selectedDoctor = doctors.find(doc => doc.name === formData.doctor);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Form */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {appointmentBooked ? 'Edit Appointment' : 'Book an Appointment'}
              </h2>
              
              {!appointmentBooked ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Doctor <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Choose a doctor</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
                          </option>
                        ))}
                      </select>
                    </div>

                    {formData.doctor && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <span className="font-medium">Available on:</span> {selectedDoctor?.availableDays.join(', ')}
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Appointment Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="appointmentType"
                          value={formData.appointmentType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="online">Video Consultation</option>
                          <option value="offline">In-Person Visit</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Visit <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Briefly describe your symptoms or reason for consultation"
                        required
                      />
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setShowHistoryForm(!showHistoryForm)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                      >
                        <span className="font-medium text-gray-700">Add Medical History (Optional)</span>
                        <ChevronDown className={`transition-transform ${showHistoryForm ? 'rotate-180' : ''}`} size={20} />
                      </button>
                      {showHistoryForm && (
                        <div className="p-4 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Medical History</label>
                            <textarea
                              name="medicalHistory"
                              value={formData.medicalHistory}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Any pre-existing conditions, allergies, or previous treatments"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Provider</label>
                            <input
                              type="text"
                              name="insuranceProvider"
                              value={formData.insuranceProvider}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="If applicable"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <CheckCircle2 className="mr-2" size={18} />
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <CheckCircle2 className="mx-auto text-green-500" size={48} />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">Appointment Booked!</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      We've sent confirmation details to your email.
                    </p>
                  </div>
                  <button
                    onClick={handleEditAppointment}
                    className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Make Changes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Appointment Details */}
          <div className="lg:col-span-2 space-y-6">
            {appointmentBooked ? (
              <>
                {/* Appointment Overview Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Appointment Summary</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Confirmation ID: ABC123456
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium 
                          ${formData.appointmentType === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {formData.appointmentType === 'online' ? 'Video Consultation' : 'In-Person Visit'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Doctor</h4>
                          <p className="mt-1 text-lg font-medium text-gray-900">{formData.doctor}</p>
                          <p className="text-sm text-gray-500">{selectedDoctor?.specialty}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Consultation Type</h4>
                          <p className="mt-1 text-gray-900">{formData.appointmentType === 'online' ? 
                            'Video call meeting link will be shared before appointment' : 
                            'Clinic address: 123 Medical Center Dr, Suite 45'}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Date & Time</h4>
                          <p className="mt-1 text-lg font-medium text-gray-900">
                            {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                          </p>
                          <p className="text-gray-900">{formData.time}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Reason for Visit</h4>
                          <p className="mt-1 text-gray-900">{formData.reason || 'Not specified'}</p>
                        </div>
                      </div>
                    </div>

                    {formData.appointmentType === 'online' && (
                      <div className="mt-8 bg-blue-50 rounded-lg p-4">
                        <div className="flex items-start">
                          <AlertCircle className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
                          <div>
                            <h4 className="text-sm font-medium text-blue-800">Video Consultation Instructions</h4>
                            <ul className="mt-2 text-sm text-blue-700 space-y-1 list-disc list-inside">
                              <li>We'll send you a meeting link 30 minutes before your appointment</li>
                              <li>Test your microphone and camera beforehand</li>
                              <li>Have your ID ready for verification</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="border-b border-gray-200">
                    <nav className="flex -mb-px">
                      <button
                        onClick={() => setSelectedTab('details')}
                        className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${selectedTab === 'details' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        Appointment Details
                      </button>
                      <button
                        onClick={() => setSelectedTab('preparation')}
                        className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${selectedTab === 'preparation' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        How to Prepare
                      </button>
                      <button
                        onClick={() => setSelectedTab('documents')}
                        className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${selectedTab === 'documents' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        Your Documents
                      </button>
                    </nav>
                  </div>
                  <div className="p-6">
                    {selectedTab === 'details' && (
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <User className="text-blue-600" size={16} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Patient Information</h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {formData.medicalHistory ? (
                                formData.medicalHistory
                              ) : (
                                'No medical history provided'
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <Hospital className="text-blue-600" size={16} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Insurance</h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {formData.insuranceProvider || 'Not specified'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedTab === 'preparation' && (
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">What to Bring</h4>
                            <ul className="mt-1 text-sm text-gray-500 list-disc list-inside space-y-1">
                              <li>Valid photo ID</li>
                              <li>Insurance card (if applicable)</li>
                              <li>List of current medications</li>
                              <li>Previous medical records if available</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedTab === 'documents' && (
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mr-3">
                                <FileText className="text-gray-500" size={18} />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-700">Upload Medical Documents</h4>
                                <p className="text-xs text-gray-500">PDF, JPG, or PNG (Max 10MB)</p>
                              </div>
                            </div>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                              Upload
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <  Hospital className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Medical Appointment</h3>
                  <p className="text-gray-600 mb-6">
                    Fill out the form to schedule an appointment with our specialist doctors.
                    After booking, you'll receive confirmation with all necessary details.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <Video className="text-blue-600 mx-auto mb-2" size={24} />
                      <p className="text-sm font-medium text-gray-700">Online Consultation</p>
                      <p className="text-xs text-gray-500">Via secure video call</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <User className="text-green-600 mx-auto mb-2" size={24} />
                      <p className="text-sm font-medium text-gray-700">In-Person Visit</p>
                      <p className="text-xs text-gray-500">At our medical center</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingSystem;

