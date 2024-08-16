export default function FeatureCard({ title, description, svg }) {
  return (
    <div className="card shadow-xl border border-gray-200 w-96">
      <div className="card-body">
        <h2 className="card-title">
          {svg} {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
