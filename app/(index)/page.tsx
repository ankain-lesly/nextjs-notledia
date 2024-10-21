import { NotlediaUIImage, UserAvatar } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { BiBrain, BiCheck, BiCheckCircle, BiDownload } from "react-icons/bi";
import { BsShieldCheck, BsStars, BsTools } from "react-icons/bs";
import { CgBulb } from "react-icons/cg";
import { CiShare2 } from "react-icons/ci";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function LandingPage() {
  return (
    <>
      {/* hero */}
      <section className="main-banner">
        <div className="owl-carousel owl-banner" id="hero-stop-slide">
          <div className="hero-area area-one section-p bg-hero-driven bg-cover bg-bottom bg-dark dark:bg-light-dd text-light-main bg-blend-soft-light bg-no-repeat relative w-screen flex-center">
            {/* slide One */}
            <div className="container-x section-p md:flex-row flex-col flex gap-4 md:gap-12 items-center">
              <div className="md:w-3/5_ relative">
                <Link
                  href="/register"
                  title="Contact us to get a demo"
                  className="block mb-5 text-primary font-bold lcg_will_animate delay-5 lcg_scroll from_scale">
                  NotLedia 4 Creativity
                </Link>
                <h1 className="text-[38px] md:text-4xl leading-10 font-extrabold md:leading-[3.2rem] mb-8 lcg_scroll from_bottom delay-0">
                  Create & Share <br className="max-xs:hidden" />
                  <span className="orange_gradient text-center">
                    AI-Powered Notes
                  </span>
                </h1>
                <p className="mb-3 max-w-xl _md:w-4/5 text-lg lcg_scroll from_bottom delay-1 leading-snug">
                  Harness the power of AI to create, organize, and share your
                  notes like never before. NotLedia provides and intuitive
                  platform for notes taking with a super cool{" "}
                  <Link href={"/download"} className="text-muted font-bold">
                    mobile app
                  </Link>{" "}
                  for Android and IOS users
                </p>
                <div className="flex gap-4 mt-8 md:mt-12">
                  <a
                    href="/register"
                    className="btn btn-danger flex-center gap-2 px-4 py-4 md:px-5 rounded-full lcg_scroll from_bottom delay-2 w-full max-w-xs">
                    Get Started
                    <FaAngleDoubleRight className="fas fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-p">
        <div className="container-x">
          <div className="content text-center flex-center flex-col mb-4">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            {/* <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
              NotLedia&apos;s Side View
            </p> */}
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              Our AI-Powered <br /> Features
            </h2>

            <p className="my-8 mx-auto max-w-lg">
              NotLedia helps you organize and manage your notes effortlessly.
              Perfect for students, professionals, and anyone who needs to keep
              track of important information.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BiBrain,
                title: "Smart Note Generation",
                description:
                  "NotLedia's AI assists in creating comprehensive notes from your ideas.",
              },
              {
                icon: CiShare2,
                title: "Intelligent Sharing",
                description:
                  "Share notes with the right people based on NotLedia's content analysis.",
              },
              {
                icon: FiZap,
                title: "Automated Insights",
                description:
                  "Get AI-generated summaries and key takeaways from your NotLedia notes.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-light-dd shadow-lg p-6 rounded-3xl">
                <feature.icon className="text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-dark-l">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-p">
        <div className="container-x">
          <h2 className="text-[32px] leading-8 lcg_scroll from_bottom lcg_animate text-center mb-12">
            Why Choose NotLedia?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {[
                  "Transform rough ideas into structured notes with NotLedia's AI",
                  "Save time with NotLedia's AI-generated summaries and insights",
                  "Collaborate more effectively with NotLedia's smart sharing",
                  "Never lose context with NotLedia's AI-powered organization",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <BiCheck
                      className="text-success mr-2 shrink-0"
                      fontSize={22}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light-d text-dark p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What Our Users Say</h3>
              <blockquote className="italic">
                &quot;NotLedia&apos;s AI features have revolutionized my
                note-taking. It&apos;s like having a personal assistant
                organizing my thoughts!&quot;
              </blockquote>
              <div className="mt-4 flex items-center">
                <Image
                  src={UserAvatar}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <span>Alex M., Researcher</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="container-x">
          <div className="content text-center flex-center flex-col mb-10">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            {/* <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
              Download Now
            </p> */}
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              Get Notledia <br className="hidden sm:block" /> on your mobile
              {/* Device */}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex-center">
              {/* TODO: */}
              <Image
                src={NotlediaUIImage}
                alt="Notledia mobile app preview"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Take Your Notes Anywhere
              </h3>
              <p className="text-dark-l mb-8">
                Access Notledia&apos;s powerful AI-driven note-taking features
                on the go. Available for both Android and iOS devices.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/download#android"
                  className="btn btn-danger py-3 px-6 rounded-full inline-flex items-center justify-center hover:opacity-70 font-bold transition duration-300">
                  <BiDownload className="mr-2" />
                  Download for Android
                </Link>
                <Link
                  href="/download#ios"
                  className="btn btn-danger py-3 px-6 rounded-full inline-flex items-center justify-center hover:opacity-70 font-bold transition duration-300">
                  <BiDownload className="mr-2" />
                  Download for iOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-p relative bg-light-d">
        <div className="container-x relative">
          <div className="content text-center flex-center flex-col mb-10">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
              Power Tools
            </p>
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              How NotLedia Powers <br className="hidden sm:block" /> Your Notes
            </h2>
          </div>

          <div className="relative">
            {/* Grid Gradient */}
            <div className="absolute h-[250px] md:h-[100px] w-full flex-center left-0 top-28">
              <div className="bg-radial-bs bg-secondary opacity-80 w-full max-w-md h-20 rounded-full lcg_scroll from_Scale"></div>
            </div>
            <div className="block sm:hidden absolute h-[750px] w-full flex-center left-0 top-1/3">
              <div className="bg-radial-bs bg-secondary w-full max-w-xs opacity-80 h-20 rounded-full lcg_scroll delay-3 from_Scale"></div>
            </div>
            {/* Grid Gradient Ends */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
              {[
                {
                  step: 1,
                  icon: CgBulb,
                  title: "Input Your Thoughts",
                  description:
                    "Quickly jot down your thoughts or effortlessly upload existing documents to NotLedia for easy access, processing, organization and shearing.",
                },
                {
                  step: 2,
                  icon: BsTools,
                  title: "AI Processing",
                  description:
                    "NotLedia’s intelligent AI swiftly analyzes your entries, transforming raw ideas into well-structured, actionable insights tailored to your needs.",
                },
                {
                  step: 3,
                  icon: BsStars,
                  title: "Enhanced Output",
                  description:
                    "Receive detailed, enriched notes based on your input, complete with contextual insights and suggestions for improved clarity and usability.",
                },
                {
                  step: 4,
                  icon: BsShieldCheck,
                  title: "Smart Sharing",
                  description:
                    "Easily connect with relevant collaborators as NotLedia’s AI recommends sharing options, enhancing teamwork and productivity effortlessly.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="lcg_scroll from_bottom_scale w-full xs:w-auto bg-light-dd text-dark flex-1 shadow-bs p-6 rounded-2xl delay-min delay-0">
                  {<item.icon fontSize={32} className="text-warning" />}
                  <h4 className="my-3 font-bold">{item.title}</h4>
                  <p className="">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center py-12 px-4 space-y-4">
            <h5>Pro Tip For You</h5>
            <p className="max-w-md mx-auto">
              Notledia&apos;s workspace make you keep things tidy and need like
              a pro. Try out our options..
            </p>
            <Link
              href={"/download"}
              className="btn btn-danger text-light-main py-3 px-4 rounded-full font-bold">
              Download Our App
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="section-p">
        <div className="container-x">
          <div className="content text-center flex-center flex-col mb-10">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
              Starter Bundles
            </p>
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              Choose Your <br className="hidden sm:block" /> NotLedia Plan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "Free",
                features: [
                  "NotLedia's AI-powered note organization",
                  "Basic sharing",
                  "5GB storage",
                ],
              },
              {
                name: "Pro",
                price: "$9.99/mo",
                features: [
                  "Everything in Basic",
                  "Advanced NotLedia AI insights",
                  "Unlimited storage",
                  "Priority AI processing",
                ],
              },
              {
                name: "Team",
                price: "$49.99/mo",
                features: [
                  "Everything in Pro",
                  "Team collaboration",
                  "NotLedia AI-driven project management",
                  "API access",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="border border-muted/20 bg-light-d/30 p-6 rounded-lg text-center flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="text-left mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center mb-2">
                      <BiCheck className="text-success mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={"/register?bundle=" + plan.name}
                  className="bg-primary mt-auto text-light-main py-2 px-6 rounded-full inline-block hover:bg-secondary transition duration-300 font-bold">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        className="section-p bg-mobile-concept bg-cover bg-bottom bg-dark-main bg-fixed bg-blend-soft-light text-light-main angle_left_right"
        style={{ backgroundAttachment: "fixed" }}>
        <div className="container-x section-p md:flex">
          <div className="right flex-1">
            <h1 className="text-[32px] md:text-4xl leading-10 font-extrabold md:leading-[4rem] mb-4 lcg_scroll from_scale lcg_animate">
              Supercharge your
              <span className="block text-warning">Notes with Notledia?</span>
            </h1>
            <p className="max-w-lg mb-8 lcg_scroll from_bottom lcg_animate">
              Join thousands of users who have transformed their note-taking
              experience with NotLedia. Start Your NotLedia Journey
            </p>
            <Link
              href="/register?bundle=starter"
              className="btn btn-danger flex-center gap-2 px-4 py-4 md:px-5 rounded-full lcg_will_animate-from_bottom delay-2 w-full sm:max-w-xs lcg_scroll from_bottom lcg_animate">
              Get Started <BiCheckCircle fontSize={25} />
            </Link>
          </div>
        </div>
        <div className="left flex-1"></div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="section-p bg-light">
        <div className="container-x">
          <div className="content text-center flex-center flex-col mb-10">
            <div className="w-20 mb-4 bg-danger h-1 rounded-full"></div>
            {/* <p className="uppercase mb-5 lcg_scroll from_scale lcg_animate">
            Starter Bundles
          </p> */}
            <h2 className="max-w-sm text-[32px] leading-8 lcg_scroll from_bottom lcg_animate">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "How does NotLedia's AI enhance my notes?",
                a: "NotLedia's AI analyzes your input, structures it, and provides additional insights and connections you might have missed.",
              },
              {
                q: "Is my data safe with NotLedia's AI processing?",
                a: "Yes, we use state-of-the-art encryption and anonymization techniques to ensure your data remains private and secure.",
              },
              {
                q: "Can I use NotLedia offline?",
                a: "Yes, you can create notes offline. NotLedia's AI features will sync and process your notes when you're back online.",
              },
              {
                q: "How accurate is NotLedia's AI in understanding my notes?",
                a: "NotLedia's AI is highly accurate and continuously improving. It's designed to understand context and nuances in various fields.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                <p className="">{item.a}</p>
              </div>
            ))}
            {/* more */}
            <div className="border border-muted/20 bg-light-d/30 p-6 rounded-lg text-center flex flex-col">
              <p>Still have more queries? visit out faq page</p>
              <Link href={"/faq"} className="text-secondary font-bold">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
