"use client";
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
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your team's needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-sm ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 scale-105 md:scale-110' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Get Started Button */}
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 mb-8 ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="space-y-4 flex-grow">
                  <h4 className="font-semibold text-gray-900 text-lg mb-4">
                    What's included:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.included
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          feature.included
                            ? 'text-gray-900'
                            : 'text-gray-500'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? 
          </p>
          <button className="text-blue-500 hover:text-blue-600 font-semibold underline">
            Contact our sales team
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;