
import { Button } from 'react-bootstrap'; // Use Bootstrap's Button
import { Check, X } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Essential features for individual investors",
    features: [
      "Real-time stock quotes",
      "Basic portfolio tracking",
      "Daily market news",
      "Limited stock screener",
    ],
    notIncluded: [
      "Advanced analytics",
      "Expert recommendations",
      "Real-time alerts",
    ]
  },
  {
    name: "Pro",
    price: "$29.99",
    description: "Advanced tools for serious traders",
    features: [
      "All Basic features",
      "Advanced analytics",
      "Expert recommendations",
      "Real-time alerts",
      "Customizable dashboards",
    ],
    notIncluded: [
      "API access",
      "Dedicated account manager",
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "All Pro features",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
    ],
    notIncluded: []
  }
];

export default function PlanPage() {
  
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Choose Your Plan</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {plans.map((plan) => (
          <div className="col" key={plan.name}>
            <div className="card h-100">
              <div className="card-header text-center">
                <h3>{plan.name}</h3>
                <p className="h4">{plan.price}</p>
              </div>
              <div className="card-body">
                <p className="text-muted mb-4">{plan.description}</p>
                <ul className="list-unstyled">
                  {plan.features.map((feature) => (
                    <li key={feature} className="d-flex align-items-center">
                      <Check className="text-success me-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="d-flex align-items-center text-muted">
                      <X className="text-danger me-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer" >
                <Link href="/payment" passHref>
                <Button className="w-100">{plan.name === "Enterprise" ? "Contact Sales" : "Subscribe Now"}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
