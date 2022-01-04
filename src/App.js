import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedBackData";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  

  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you would like to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))

    }
    console.log('app', id);
  }



  return (
    <>

      <Header />
       <div className="container">
         <FeedbackForm />
       <FeedbackStats feedback={feedback} />
       <FeedbackList feedback={feedback}
       handleDelete={deleteFeedBack} />

       </div>
    </>
  );
}

export default App;
