import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Member } from "../_models/member";
import { MembersService } from "../_services/members.service";

@Injectable({
    providedIn: 'root'
})

export class MemeberDetailedResolver implements Resolve<Member> {

    constructor(private memerService: MembersService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Member> {
        return this.memerService.getMember(route.paramMap.get('username'));
    }
}