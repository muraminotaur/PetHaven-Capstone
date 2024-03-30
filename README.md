![PetHavenLogoType](src/main/resources/static/images/pethavenLogoType.png)
# PetHaven Capstone Project

*Kristina Khalid-Abasi, Jacob Slagle, Milan Haydel ([mhaydel2](https://github.com/mhaydel2)), Blake Dauterive, Gunnar Stall*

This is our senior capstone project for CMPS490 at University of Louisiana at Lafayette. Our project was to create a generic client in need of a web application to accept and track donations, as well as to build that web application. Team member Milan Haydel and I were both Team Leads for the backend portion of the site as well as the integration with the front-end.

### Technologies used

The site was written in Java using the SpringBoot framework. Our decision to use Spring came down to familiarity and comfort as both Milan and I were most comfortable writing in Java. For handling donations, we decided to use [Stripe](https://docs.stripe.com/) so we could avoid spending most of our time learning financial programming. Stripe's API was integrated into Spring with Maven and implemented via a link to a personalized Stripe payment page. During demos, the site was ran using Apache Tomcat that came packaged in IntelliJ.
