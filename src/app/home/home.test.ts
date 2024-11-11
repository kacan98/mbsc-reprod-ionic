import { MbscCalendarEvent, MbscResource } from '@mobiscroll/angular'

export const getBrutallyMockedTeam = (): MbscResource[] => [
  {
    id: '$a03ba53d-288c-4239-83ad-57bdbb7b8563',
    name: 'Small',
    collapsed: false,
    eventCreation: false,
    children: [
      {
        id: '68719493549',
        name: 'Karel Cancara',
        personnelNumber: 'USFF-00000015',
        eventCreation: true,
        depth: 1,
        isParent: false,
      },
      {
        id: '68719493535',
        name: 'Some other worker',
        personnelNumber: 'USFF-00000001',
        eventCreation: true,
        depth: 1,
        isParent: false,
      },
    ],
    depth: 0,
    isParent: true,
  },
]

export const getBrutallyMockedCards = (): MbscCalendarEvent[] => [
  {
    resource: '68719493535',
    start: new Date(),
    end: new Date(),
    title: 'WO-000286',
    id: '5637179845',
  },
]
