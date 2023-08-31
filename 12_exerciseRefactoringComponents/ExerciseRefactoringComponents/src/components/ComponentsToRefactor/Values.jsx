/**
 * CONVERT TO A FUNCTION COMPONENT
 */

import {
  UserGroupIcon,
  GlobeIcon,
  TrendingUpIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { Component } from "react";
import NavBar from "../NavBar";

class Values extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="py-12 mt-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-8">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Our Values
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize">
                nourishing people and the planet
              </p>
              <p className="mt-4 max-w-2xl  text-xl text-gray-500 lg:mx-auto">
                We seek out the finest natural and organic foods available,
                maintain the strictest quality standards in the industry, and
                have an unshakeable commitment to sustainable agriculture. Then,
                make these products available to every possible through our
                world class Ecommerce grocery store.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {/* Value One */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <ScaleIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Sell the Highest Quality Natural and Organic Foods
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    When you visit our online grocery store, you’ll find vibrant
                    stacks of produce, animal welfare rated meat, Responsibly
                    Farmed and sustainable wild-caught seafood and body care
                    products with ingredients you can trust. That’s because we
                    have experienced team members who help make it all possible.
                    They partner with farmers and suppliers and carefully vet
                    our products to make sure they meet our high standards by
                    researching ingredients, reading labels and auditing
                    sourcing practices — all to make shopping easier for you.
                  </dd>
                </div>
                {/* Value Two */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      We satisfy and delight our customers
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    You are the lifeblood of our business and our most important
                    stakeholder. We strive to meet or exceed their expectations
                    on every shopping experience.We continually experiment and
                    innovate to offer a better customer experience. We create
                    Ecommerce environments that are inviting, fun, unique,
                    comfortable, attractive, nurturing, and educational
                  </dd>
                </div>
                {/* Value Three */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <GlobeIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      We Care About our Community and the Environment
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We serve and support a local experience, and practice and
                    advance environmental stewardship.
                    <a href="/#">
                      Learn more about our current community and environmental
                      projects{" "}
                    </a>
                  </dd>
                </div>
                {/* Value Four */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <TrendingUpIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      We promote team member growth and happiness
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our success is dependent upon the collective energy,
                    intelligence, and contributions of all of our Team Members.
                    We design and provide safe and empowering environments where
                    highly motivated people can flourish and reach their highest
                    potential.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Values;
