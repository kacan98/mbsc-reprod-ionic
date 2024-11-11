import { Component } from '@angular/core'
import { MbscCalendarEvent, MbscResource } from '@mobiscroll/angular'
import {
  MbscEventcalendarOptions,
  MbscEventcalendarView,
} from '@mobiscroll/angular/dist/js/core/components/eventcalendar/eventcalendar.types'
import { getBrutallyMockedCards, getBrutallyMockedTeam } from './home/home.test'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  boardCards: MbscCalendarEvent[]
  mbscResources: MbscResource[]

  timelineOptions: MbscEventcalendarOptions = {
    dragToMove: true, //nice to be a able to see if it adjusts when dragged
    // externalDrop: true,
  }
  view: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      startDay: 1,
      endDay: 5,
      eventList: true,
      // eventHeight: 'variable',
    },
  }
  constructor() {
    this.boardCards = getBrutallyMockedCards()
    this.mbscResources = getBrutallyMockedTeam()
  }
}
