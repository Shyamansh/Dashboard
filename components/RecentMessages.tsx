import MessageRow from "./MessageRow";

const RecentMessages = () => {
  return (
    <div className="recent-messages">
      <h2>Recent Messages</h2>
      <MessageRow name="Kadin George" message="How to access AI services" status="Answered" time="10:25" />
      <MessageRow name="Anika Calzoni" message="Product Query" status="Pending" time="12:30" />
      <MessageRow name="Mira Bator" message="Discount coupons" status="Pending" time="Yesterday" />
    </div>
  );
};

export default RecentMessages;
