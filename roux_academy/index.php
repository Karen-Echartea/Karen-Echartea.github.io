<?php
  include('layouts/header.php');
?>

<!-- Rotator -->
  <section id="main">
    <article id="aboutheevent">
      <h2>About the Event</h2>
      <p>The Roux Academy’s annual conference and exhibit is designed to foster a close-knit relationship amongst artists at various universities around the world. But sign up early, as this not-to-miss conference sells out quickly, and the waiting list is long. In addition, art students are encouraged to send in works from their school portfolios to be considered for hanging in the CAC exhibit halls, as well as to be selected as a Featured Artist.</p>
    </article>
    <!-- About the event -->
    
    <article id="featuredartists">
      <h2>Featured Artists</h2>
      <p>The Roux Academy selects approximately 200 distinct pieces of contemporary art for display in their collective exhibit. Nine individuals are granted his or her own exhibit hall to display entire collections or themed pieces. Each Featured Artist has an opportunity to speak at the conference to share his or her vision, perspective, and techniques with conference attendees.</p>
      <div class="artistgroup clearfix">
        <ul class="clearfix">
          <li><img src="images/artists/Barot_Bellingham_tn.jpg" alt="Barot Bellingham"></li>
          <li><img src="images/artists/Constance_Smith_tn.jpg" alt="Constance Smith"></li>
          <li><img src="images/artists/Hassum_Harrod_tn.jpg" alt="Hassum Harrod"></li>
          <li><img src="images/artists/Hillary_Goldwynn_tn.jpg" alt="Hillary Goldwynn"></li>
          <li><img src="images/artists/Jennifer_Jerome_tn.jpg" alt="Jennifer Jerome"></li>
          <li><img src="images/artists/Jonathan_Ferrar_tn.jpg" alt="Jonathan Ferrar"></li>
          <li><img src="images/artists/LaVonne_LaRue_tn.jpg" alt="LaVonne LaRue"></li>
          <li><img src="images/artists/Riley_Rewington_tn.jpg" alt="Riley Rewington"></li>
          <li><img src="images/artists/Xhou_Ta_tn.jpg" alt="Xhou Ta"></li>
        </ul>
        <p class="clearfix"><a class="link" href="artists.php">View Artist Info</a></p>
      </div>
    </article>
    <!-- Featured Artists -->
    <article id="thevenue">
      <h2>The Venue</h2>
      <h3>Hotel Contempo</h3>
      <p><img src="images/hotel_contempo.jpg" alt="Hotel bedroom">CAC speaking events and gallery exhibits take place inside Hotel Contempo, at 309 1st Avenue, in Downtown Seattle. Just a walk to the Space Needle, and a sampling of restaurants and shopping makes the venue a much sought-after location for conferences, year after year.</p>
      <p>Hotel Contempo is the perfect spot for a gathering of modern artists. Not only are the conference rooms and halls decked with breathtaking contemporary art and sculptures, but the individual rooms are as unique as the renowned artists who were commissioned to decorate them. From the Ross Monroe Purple suite filled  wall to wall with paintings to the Tess Lessinger Sculpted Universe suite, with dozens of original sculptures, visitors are sure to be intrigued and comforted during their stay at Hotel Contempo.</p>
    </article>
    <!-- The Venue --> 
  </section>
  <!-- maincontent -->
  
  <aside id="sidebar" class="clearfix">
    <?php
      include('layouts/comingevent.php');
    ?>
    <!-- Coming to event -->
    
    <article id="schedule">
      <h2>Schedule</h2>
      <h3>Monday</h3>
      <p>The first day of CAC events is kicked off under the theme of Art in Full Color. From a demonstration in graffiti art on a wall of the  Rousseau Room, to the exhibit of colorful glazed modern glassware in the Dover Hall.</p>
      <h3>Tuesday</h3>
      <p>Water in Art is the theme for the second day, as art students gather at the Fountain of Intrigue to create ice sculptures, and art lecturers discuss the use of water as an art material, and water as an art subject.</p>
      <p><a class="link" href="schedule/index.php">Full Schedule</a></p>
    </article>
    <!-- Schedule --> 
  </aside>
  <!-- Sidebar -->
  <?php
    include('layouts/footer.php');
  ?>