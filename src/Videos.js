import React from 'react'
import Filter from './Filter';
import SingleVideo from './SingleVideo';
import "./Videos.css";

function Videos() {

    return (
        <div className="videos">
            <Filter />
            {/* Videos */}
              <div className="row">
                  <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/hQjlM-8C4Ps/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBN6vr7kiELWRyfHkHQLsg8ydLDCQ"
                  profile__img="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s68-c-k-c0x00ffffff-no-rj"
                  title="React Portfolio Website | Build and Deploy |..."
                  chaneel__name="Lama Dev"
                  views="21k views ."
                  timestamps=" 1 week ago"
                  videos__duration="1:39:53"
                  />
                  <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/FAWch-wOs4I/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCwtXnjErrVJDqoOPK8dqyBg6HxZQ"
                  profile__img="https://yt3.ggpht.com/ytc/AKedOLQICsLr5jSdgCCZo2RjCtsQ6H2c3SOkuXHI1YZDfw=s68-c-k-c0x00ffffff-no-rj"
                  title="Neela Miles | guitar cover ..."
                  chaneel__name="Miles"
                  views="21k views ."
                  timestamps=" 1 week ago"
                  videos__duration="04:32"
                  />
                  <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/XDR8g9frVpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxRr18iTZAELWV4YmrdHo-TPIetg"
                  profile__img="https://yt3.ggpht.com/ytc/AMLnZu8K9p9H8QrqV0FP3fqWukE-kN2I1djLjFelOdwwtw=s88-c-k-c0x00ffffff-no-rj"
                  title="Gulzar poetry || gulzar shayari || hindi shayari..."
                  chaneel__name="Learn With Sumit"
                  views="2,036,728 views."
                  timestamps=" 9 Oct 2020"
                  videos__duration="01:30"
                  />
                  <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/gIHjLTmKHgM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDlgMdaNf0D8R_Mk_PaLZKqzdzF_Q"
                  profile__img="https://yt3.ggpht.com/ytc/AKedOLQy6MJvKgmtlQRk137FP1rZtMo8dyo3FTfDBG4d=s68-c-k-c0x00ffffff-no-rj"
                  title="Chuye dilm chuye dile mon Movie song"
                  chaneel__name="Bd Songs"
                  views="42k views ."
                  timestamps=" 1 week ago"
                  videos__duration="04:41"
                  />


                  <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/C2QoDC1rka8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANeRLLwoDQhA0LrhPoLi8OvETOHw"
                  profile__img="https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s88-c-k-c0x00ffffff-no-rj"
                  title="What should you do in 2nd year of college? 2nd Year Roadmap"
                  chaneel__name="Apna College"
                  views="28k views ."
                  timestamps=" 10 Sept 2022"
                  videos__duration="04:41"
                  />

                  <SingleVideo 
                  thumb__img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/63039d76602395.5c6e89df10fcb.png"
                  profile__img="https://yt3.ggpht.com/R0mCBzHAWbDqCsfEe8epVNNLrlbuvGn7JI-4hdYft2MLuedI_lMonOBUF_wlhECtgC6USko04Ww=s88-c-k-c0x00ffffff-no-rj"
                  title="Library Management System using React (in Hinglish) - Dev11"
                  chaneel__name="Dev11"
                  views="1,191 views."
                  timestamps=" 9 Aug 2022"
                  videos__duration="02:25:23"
                  />

                  <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/CtgD91Ev4NU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDUVaxDO8zegDNK0iPT5YXW0Rpz-Q"
                  profile__img="https://yt3.ggpht.com/l8CPpluol0brprHG9dZMaD7AJ2XrngeNs_oy85XUqdkLi5E3PhCu7VmP_HsRM8yUk-suL-7ImQ=s88-c-k-c0x00ffffff-no-rj"
                  title="Rozana Full Video Song| Akshay Kumar, Taapsee Pannu..."
                  chaneel__name="Taher Shabbir "
                  views="94k views."
                  timestamps="  2 May 2017 "
                  videos__duration="04:29"
                  />

                <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/QTzT379JOoo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGljOhz1CiY2x5fJUoz33WFqwvBQ"
                  profile__img="https://yt3.ggpht.com/ytc/AMLnZu907ujnXt1ae1wVUDH8NrYtoLeeI5XCK7OsMU3HCw=s88-c-k-c0x00ffffff-no-rj"
                  title="JavaScript tutorial | call apply bind| Interview Questions..."
                  chaneel__name="Anil Sidhu"
                  views="770 views ."
                  timestamps="10 Sep 2022"
                  videos__duration="27:00"
                  />

                <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/FjKTtTsNU7c/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAdGNfaXODux4km_ND_OYOshfpDRg"
                  profile__img="https://yt3.ggpht.com/ytc/AMLnZu-Xi5b3zTBSyVHEaxyhof2PFpwr8D7G-E09hNAr=s88-c-k-c0x00ffffff-no-rj"
                  title="Purab Se (Om Namah Shivay) | AVS..."
                  chaneel__name="Shreya Ghoshal"
                  views="42,337,507 views ."
                  timestamps="  22 Feb 2020"
                  videos__duration="06:35"
                  />

                <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/CFD9EFcNZTQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_qB6x1FLufzDPM9l03I-Hdvb2wg"
                  profile__img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s88-c-k-c0x00ffffff-no-rj"
                  title="Java Full Course 2022 | Core Java Full Course "
                  chaneel__name="Simplilearn"
                  views="31k views ."
                  timestamps="17 Sept 2021"
                  videos__duration="10:32:35"
                  />

                <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/E7ucYjyzYA4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChiYQIFIajsIx-Wr_sHwFHP3APaQ"
                  profile__img="https://yt3.ggpht.com/ytc/AMLnZu8OpKev7NLiYQg2ofivLZFY1q3HKJQ8dGOYLInqTg=s88-c-k-c0x00ffffff-no-rj"
                  title="Dr Vikas Divyakirti | प्रेम में आत्मसम्मान होना भी बहुत जरूरी है।..."
                  chaneel__name=" Drishti"
                  views="38k views ."
                  timestamps="  22 Fe20"
                  videos__duration="06:17"
                  />

                <SingleVideo 
                  thumb__img="https://i.ytimg.com/vi/A66TYFdz8YA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYifBQjrvabUn02ze6z2KP4uvJsg"
                  profile__img="https://yt3.ggpht.com/ytc/AMLnZu8NjSVlH_3uxrG2RZ_0Dnv5MakURrLaEy3S9UXe4RM=s88-c-k-c0x00ffffff-no-rj-mo"
                  title="Tu Aake Dekhle..."
                  chaneel__name="King"
                  views="4.8M views ."
                  timestamps=" 1 Sept 2020"
                  videos__duration="05:02"
                  />

              </div>
        </div>
    )
}

export default Videos