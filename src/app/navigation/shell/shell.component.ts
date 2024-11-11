import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MenuController } from '@ionic/angular'
import { Observable, Subscription } from 'rxjs'

interface TabPage {
  title: string
  path: string
  icon: string
}

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
