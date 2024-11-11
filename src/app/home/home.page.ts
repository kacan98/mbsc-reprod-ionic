import { Component } from "@angular/core";
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscResource,
} from "@mobiscroll/angular";
import { MbscEventcalendarView } from "@mobiscroll/angular/dist/js/core/components/eventcalendar/eventcalendar.types.public";
import { getBrutallyMockedCards, getBrutallyMockedTeam } from "./home.test";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
})
export class HomePage {
  isCollapsed: boolean | undefined;
  collapseIcon: string | undefined;
  timelineOptions: MbscEventcalendarOptions = {
    dragToMove: true, //nice to be a able to see if it adjusts when dragged
  };
  view: MbscEventcalendarView = {
    timeline: {
      type: "week",
      startDay: 1,
      endDay: 5,
      eventList: true,
      // eventHeight: 'variable',
    },
  };

  mbscResources?: MbscResource[];
  boardCards?: MbscCalendarEvent[];
  from?: string;
  to?: string;
  workerIds: string[] = [];

  ngOnInit() {
    this.boardCards = getBrutallyMockedCards();
    this.mbscResources = getBrutallyMockedTeam();
  }
}
