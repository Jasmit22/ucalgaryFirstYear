export default function FeatureCard({ title, description, svg }) {
    return (
      <div className="card bg-base-100 w-96 h-40 shadow-xl border border-gray-200">
        <div className="card-body">
          <h2 className="card-title">{svg} {title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  