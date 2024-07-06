import { Routing } from "./Routing";

export function App(){
  return(
    <div>
      <Routing />
    </div>
  )
}





// import { Sidebar } from './components/Sidebar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Feed } from './Routes/Feed';
// import { Suspense } from 'react';
// import { Profile } from './Routes/Profile'
// import { Contribute } from './Routes/Contribute'
// import { Search } from './Routes/Search';
// import { Notification } from './Routes/Notification';
// import { Message } from './Routes/Message';
// import { Saved } from './Routes/Saved';
// import { Upvote } from './Routes/Upvote';
// import { About } from './Routes/About';
// import { Home } from './Routes/Home';

// export function App() {
//   return (
//     <div className="flex h-screen">
//       <BrowserRouter >
//         <div className="w-1/4 h-full p-4 bg-gray-200">
//           <Sidebar className="sticky top-0" />
//         </div>
//         <Routes>
//           <Route path="/" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Feed />
//               </div>
//             </Suspense>
//           }>    
//           </Route>

//           <Route path="/Feed" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Feed />
//               </div>
//             </Suspense>
//           }>    
//           </Route>

//           <Route path="/Profile" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Profile />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/Contribute" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Contribute />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/Search" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Search />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/Notification" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Notification />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/Message" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Message />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/Saved" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Saved />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/Upvote" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Upvote />
//               </div>
//             </Suspense>
//           }>          
//           </Route>

//           <Route path="/About" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <About />
//               </div>
//             </Suspense>
//           }>          
//           </Route>
          
//           <Route path="/Home" element={
//             <Suspense fallback={"Loading .... !"} >
//               <div className="w-3/4 h-full overflow-y-scroll p-4">
//                 <Home />
//               </div>
//             </Suspense>
//           }>          
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
