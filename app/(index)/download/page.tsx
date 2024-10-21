import Link from "next/link";
import { BiBrain, BiCloud, BiDownload, BiLock } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { CgLaptop, CgSmartphone } from "react-icons/cg";

export default function Download() {
  return (
    <>
      <section className="section-p bg-hero-driven bg-cover bg-no-repeat bg-dark dark:bg-light-dd bg-blend-multiply bg-top relative">
        <div className="container-x pt-10 md:flex-row flex-col gap-4 md:gap-12 relative pb-24 text-center text-white">
          <div className="mx-auto w-20 mb-2 bg-danger h-1 rounded-full lcg_scroll from_scale lcg_animate"></div>
          <h1 className="mx-auto text-[38px] md:text-4xl leading-10 font-extrabold md:leading-[3.2rem] mb-4 lcg_scroll from_scale lcg_animate">
            Download NotLedia
          </h1>
          <p className="mb-3 lcg_will_animate from_bottom delay-1 lcg_scroll lcg_animate">
            Let&apos;s build your new experience
          </p>
        </div>
        {/* <div className="absolute h-24 bg-[#fff] -translate-y-20 w-full -bottom-24 rounded-t-[50px]"></div> */}
      </section>

      <section id="mobile" className="section-p">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-light-d p-8 rounded-3xl text-center">
              <CgSmartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-4">Mobile App</h2>
              <p className="mb-6">
                Take your AI-powered notes on the go with our mobile app.
              </p>
              <div className="space-y-4">
                <Link
                  href="#"
                  className="bg-primary text-dark py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-primary-dark transition duration-300 w-full">
                  <BiDownload className="mr-2" />
                  Download for Android
                </Link>
                <Link
                  href="#"
                  className="bg-primary text-dark py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-primary-dark transition duration-300 w-full">
                  <BiDownload className="mr-2" />
                  Download for iOS
                </Link>
              </div>
            </div>
            <div className="bg-light-d p-8 rounded-3xl text-center">
              <CgLaptop className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-4">Desktop App</h2>
              <p className="mb-6">
                Enhance your productivity with our feature-rich desktop
                application.
              </p>
              <div className="space-y-4">
                <Link
                  href="#"
                  className="bg-primary text-dark py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-primary-dark transition duration-300 w-full">
                  <BiDownload className="mr-2" />
                  Download for Windows
                </Link>
                <Link
                  href="#"
                  className="bg-primary text-dark py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-primary-dark transition duration-300 w-full">
                  <BiDownload className="mr-2" />
                  Download for macOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="section-p bg-light-d">
        <div className="container-x">
          <div className="text-center section-p mb-16">
            <h2 className="text-3xl font-semibold mb-6">
              Why Choose Notledia?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <BiCloud className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Sync Across Devices
                </h3>
                <p className="text-dark/80">
                  Access your notes from anywhere, on any device.
                </p>
              </div>
              <div>
                <BiLock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-dark/80">
                  Your data is encrypted and protected at all times.
                </p>
              </div>
              <div>
                <BiBrain className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Insights
                </h3>
                <p className="text-dark/80">
                  Get smart suggestions and organize your thoughts effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="section-p">
        <div className="container-x">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-dark/80">
              Join thousands of users who have already transformed their
              note-taking experience with Notledia.
            </p>
            <Link
              href="/register?bundle=Free"
              className="bg-primary text-dark py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300 inline-flex items-center">
              Create Your Free Account
              <BsArrowLeft className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
