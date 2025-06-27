export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-33">
      <h1 className="text-3xl font-bold mb-6 underline underline-offset-4 ">Terms & Conditions</h1>

      <p className="mb-4">
        By booking an appointment with our salon, you agree to the following terms and conditions.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>All appointments must be booked in advance or confirmed before arrival.</li>
        <li>We reserve the right to cancel or reschedule appointments based on availability.</li>
        <li>Service prices are subject to change without prior notice.</li>
        <li>No refunds will be provided after the service is completed.</li>
        <li>Clients must notify us in case of late arrival or cancellation.</li>
      </ul>
    </div>
  );
}
