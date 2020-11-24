import { Component, OnInit } from '@angular/core';
import { Challenges } from 'src/app/shared/models/challenges';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  
  cards :Challenges[] = [
    {
      image: 'assets/images/challenge.png',
      collect: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      description: 'It is a long established fact that a reader will be distracted by the readable eye.',
      active:true,
      icons: [
        {
          title: '5,000 Frubies',
          image:'assets/images/frubies.png'
        },
        {
          title: '2,500 Points',
          image:'assets/images/points.png'
        },
        {
          title: '5,000 Frubies',
          image:'assets/images/milestones.png'
        },
        {
          title: 'The Big Thing',
          image:'assets/images/tag.png'
        }
      ]
    },
    {
      image: 'assets/images/challenge.png',
      collect: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      description: 'It is a long established fact that a reader will be distracted by the readable eye.',
      active:false,
      icons: [
        {
          title: '5,000 Frubies',
          image:'assets/images/frubies.png'
        },
        {
          title: '2,500 Points',
          image:'assets/images/points.png'
        },
        {
          title: '5,000 Frubies',
          image:'assets/images/milestones.png'
        },
        {
          title: 'The Big Thing',
          image:'assets/images/tag.png'
        }
      ]
    },
    {
      image: 'assets/images/challenge.png',
      collect: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      description: 'It is a long established fact that a reader will be distracted by the readable eye.',
      active:true,
      icons: [
        {
          title: '5,000 Frubies',
          image:'assets/images/frubies.png'
        },
        {
          title: '2,500 Points',
          image:'assets/images/points.png'
        },
        {
          title: '5,000 Frubies',
          image:'assets/images/milestones.png'
        },
        {
          title: 'The Big Thing',
          image:'assets/images/tag.png'
        }
      ]
    },
    {
      image: 'assets/images/challenge.png',
      collect: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      description: 'It is a long established fact that a reader will be distracted by the readable eye.',
      active:true,
      icons: [
        {
          title: '5,000 Frubies',
          image:'assets/images/frubies.png'
        },
        {
          title: '2,500 Points',
          image:'assets/images/points.png'
        },
        {
          title: '5,000 Frubies',
          image:'assets/images/milestones.png'
        },
        {
          title: 'The Big Thing',
          image:'assets/images/tag.png'
        }
      ]
    },
    {
      image: 'assets/images/challenge.png',
      collect: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      description: 'It is a long established fact that a reader will be distracted by the readable eye.',
      active:true,
      icons: [
        {
          title: '5,000 Frubies',
          image:'assets/images/frubies.png'
        },
        {
          title: '2,500 Points',
          image:'assets/images/points.png'
        },
        {
          title: '5,000 Frubies',
          image:'assets/images/milestones.png'
        },
        {
          title: 'The Big Thing',
          image:'assets/images/tag.png'
        }
      ]
    },
    {
      image: 'assets/images/challenge.png',
      collect: 'Click & Collect',
      date: '12/12/2018 at 13:00',
      description: 'It is a long established fact that a reader will be distracted by the readable eye.',
      active:false,
      icons: [
        {
          title: '5,000 Frubies',
          image:'assets/images/frubies.png'
        },
        {
          title: '2,500 Points',
          image:'assets/images/points.png'
        },
        {
          title: '5,000 Frubies',
          image:'assets/images/milestones.png'
        },
        {
          title: 'The Big Thing',
          image:'assets/images/tag.png'
        }
      ]
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
