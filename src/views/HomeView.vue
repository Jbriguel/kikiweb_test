<script>
// import TheWelcome from '../components/TheWelcome.vue'
import HeroSection from "@/components/HeroSection.vue";
import navigationBar from '../components/navigationBar.vue'
import specilitiesSection from '../components/specilitiesSection.vue'
import bookingPromoSection from '../components/bookingPromoSection.vue'
import countSection from '../components/countSection.vue'
import workGridSection from '../components/workGridSection.vue'

export default {
  components: {
    HeroSection,
    navigationBar,
    specilitiesSection,
    bookingPromoSection,
    countSection,
    workGridSection
  },
  data() {
    return {
      bg_img1: import.meta.glob('@/assets/images/person_1.jpg')
    };
  }
};
</script>
<style></style>

<template>
  <Section>

    <HeroSection backgroundImage="/assets/images/bg_1.jpg" title="Beauty Salon" logoText="Kiki Secret"
      buttonText="View Our Services" creatorLink="#" creatorName="Colorlib.com" />



    <navigationBar />
    <!-- END nav -->

    <specilitiesSection />

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <h2 class="mb-4">Our Beauty Experts</h2>
            <p>At Cheveuxla (Kiki's Secret), our experts don't just deliver services – they create an experience of
              relaxation, confidence, and elegance.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div class="img mb-4" :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }"></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Mellisa Smith</a></h3>
                <span class="position">Stylist</span>
                <div class="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div class="img mb-4" :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }"></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Marie Mush</a></h3>
                <span class="position">Fashionist</span>
                <div class="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div class="img mb-4" :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }"></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Ana Jacobson</a></h3>
                <span class="position">Makeup Stylist</span>
                <div class="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div class="img mb-4" :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }"></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Ivan Dorchsner</a></h3>
                <span class="position">Nail Specialist</span>
                <div class="text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <bookingPromoSection />

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4">Our Work</h2>
            <p>At Cheveuxla (Kiki's Secret), every style we create and every service we provide is a masterpiece crafted
              with passion and precision. From intricate braids to flawless makeup looks, our work speaks for itself.
            </p>
          </div>
        </div>
        <workGridSection />
      </div>
    </section>



    <countSection />

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4">Discover Our Gallery</h2>
            <p>Experience the artistry and passion behind our work through our curated gallery. Each image tells a story
              of creativity, precision, and elegance, reflecting our commitment to excellence.</p>
          </div>
        </div> 
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <a href="#" class="work-entry">
              <img src="/assets/images/back_08.jpg" class="img-fluid" alt="Colorlib Template">
              <div class="info d-flex align-items-center">
                <div>
                  <div class="icon mb-4 d-flex align-items-center justify-content-center">
                    <span class="icon-search"></span>
                  </div>
                  <h3>Lips Makeover</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4 ftco-animate">
            <a href="#" class="work-entry">
              <img src="/assets/images/back_06.jpg" class="img-fluid" alt="Colorlib Template">
              <div class="info d-flex align-items-center">
                <div>
                  <div class="icon mb-4 d-flex align-items-center justify-content-center">
                    <span class="icon-search"></span>
                  </div>
                  <h3>Hair Style</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4 ftco-animate">
            <a href="#" class="work-entry">
              <img src="/assets/images/back_07.jpg" class="img-fluid" alt="Colorlib Template">
              <div class="info d-flex align-items-center">
                <div>
                  <div class="icon mb-4 d-flex align-items-center justify-content-center">
                    <span class="icon-search"></span>
                  </div>
                  <h3>Makeup</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>



    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <h2 class="mb-4">Recent from blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.</p>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20"
                :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }">
              </a>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a href="#">Sept 10, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Skin Care for Teen Skin</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20"
                :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }">
              </a>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a href="#">Sept 10, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Skin Care for Teen Skin</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20"
                :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }">
              </a>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a href="#">Sept 10, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Skin Care for Teen Skin</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="ftco-section ftco-appointment">
      <div class="overlay"></div>
      <div class="container">
        <div class="row d-md-flex align-items-center">
          <div class="col-md-2"></div>
          <div class="col-md-4 d-flex align-self-stretch ftco-animate">
            <div class="appointment-info text-center p-5">
              <div class="mb-4">
                <h3 class="mb-3">Address</h3>
                <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
              <div class="mb-4">
                <h3 class="mb-3">Phone</h3>
                <p class="day"><strong>000 123 456</strong> or <strong>000 987 654</strong></p>
              </div>
              <div>
                <h3 class="mb-3">Opening Hours</h3>
                <p class="day"><strong>Monday - Friday</strong></p>
                <span>08:00am - 09:00pm</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 appointment pl-md-5 ftco-animate">
            <h3 class="mb-3">Appointments</h3>
            <form action="#" class="appointment-form">
              <div class="row form-group d-flex">
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="First Name">
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Last Name">
                </div>
              </div>
              <div class="row form-group d-flex">
                <div class="col-md-6">
                  <div class="input-wrap">
                    <div class="icon"><span class="ion-md-calendar"></span></div>
                    <input type="text" id="appointment_date" class="form-control" placeholder="Date">
                  </div>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Phone">
                </div>
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="3" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Order" class="btn btn-white btn-outline-white py-3 px-4">
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="ftco-footer ftco-section img">
      <div class="overlay"></div>
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Us</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Recent Blog</h2>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Spa Center</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Body Care</a></li>
                <li><a href="#" class="py-2 d-block">Massage</a></li>
                <li><a href="#" class="py-2 d-block">Hydrotherapy</a></li>
                <li><a href="#" class="py-2 d-block">Yoga</a></li>
                <li><a href="#" class="py-2 d-block">Sauna</a></li>
                <li><a href="#" class="py-2 d-block">Aquazone</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Have a Questions?</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San
                      Francisco, California, USA</span></li>
                  <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a>
                  </li>
                  <li><a href="#"><span class="icon icon-envelope"></span><span
                        class="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; All rights reserved | This template is made with <i class="icon-heart"
                aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>



    <!-- loader -->
    <!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->

  </Section>
</template>
