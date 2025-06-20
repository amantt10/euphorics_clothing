"use client"
import React from 'react';
import { Check } from 'lucide-react';

interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  buttonText: string;
}

const SubscriptionPlans: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Team",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      buttonText: "Get Started",
      features: [
        { name: "Up to 5 team members", included: true },
        { name: "10GB storage", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "API access", included: false },
        { name: "Custom integrations", included: false },
        { name: "Priority support", included: false },
        { name: "Advanced security", included: false }
      ]
    },
    {
      name: "Agency",
      price: "$79",
      period: "/month",
      description: "Ideal for growing agencies and businesses",
      buttonText: "Get Started",
      popular: true,
      features: [
        { name: "Up to 25 team members", included: true },
        { name: "100GB storage", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority email support", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Priority support", included: false },
        { name: "Advanced security", included: false }
      ]
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      buttonText: "Get Started",
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Unlimited storage", included: true },
        { name: "Enterprise analytics", included: true },
        { name: "24/7 phone & email support", included: true },
        { name: "Full API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced security", included: true }
      ]
    }
  ];

  const handleGetStarted = (planName: string) => {
    console.log(`Getting started with ${planName} plan`);
    // Add your subscription logic here
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your team's needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center items-stretch">
          {plans.map((plan, index) => (
            <div key={plan.name} className="flex flex-col items-center">
              {/* Popular Badge Above Card */}
              {plan.popular && (
                
              )}
              <div
                className={`relative bg-zinc-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full border border-zinc-800 w-full ${
                  plan.popular 
                    ? 'ring-2 ring-[linear-gradient(90deg,_#0d47a1_0%,_#1976d2_40%,_#8e24aa_100%)] scale-105 z-10' 
                    : 'hover:scale-105'
                }`}
              >
                {/* Plan Content */}
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-extrabold text-white mb-2 text-center font-sans tracking-tight">{plan.name}</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-4xl font-black text-white font-sans tracking-tight drop-shadow-lg">{plan.price}</span>
                    <span className="text-lg text-gray-400 ml-1 font-medium font-sans">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6 text-center font-sans text-base font-normal">{plan.description}</p>
                  <ul className="mb-8 space-y-3 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span
                          className={`mr-3 rounded-full p-1 flex items-center justify-center ${
                            feature.included
                              ? 'bg-gradient-to-r from-[#0d47a1] via-[#1976d2] to-[#8e24aa] text-white shadow-md'
                              : 'bg-zinc-800 text-zinc-600'
                          }`}
                        >
                          <Check size={18} />
                        </span>
                        <span
                          className={`$ {
                            feature.included ? 'text-white' : 'text-zinc-500 line-through'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-extrabold transition-colors duration-200 mt-auto tracking-wide font-sans text-lg shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#0d47a1] via-[#1976d2] to-[#8e24aa] text-white hover:from-[#0d47a1] hover:to-[#6d1b7b] border-0'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                    }`}
                    onClick={() => handleGetStarted(plan.name)}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}
export default SubscriptionPlans;
