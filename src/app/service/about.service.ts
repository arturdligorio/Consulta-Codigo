import { Injectable } from '@angular/core';
import { Timeline_node, Timeline_item } from 'src/app/model/timeline-item.model';

@Injectable()
export class AboutService {

    timelineList: Timeline_node[] = [
        {
            title: "2019",
            item: [
                {
                    id: 1,
                    time: "10/Janeiro",
                    title: "Inauguração da empresa",
                    body: `<img src="https://bit.ly/2TMXnXf" alt="..." class="margin"><img src="https://bit.ly/2TgvOjZ" alt="..." class="margin"><img src="https://bit.ly/2UNkpK4" alt="..." class="margin">`,
                    classIcon: 'fa fa-sign-language bg-blue'
                },
                {
                    id: 2,
                    time: "15/Janeiro",
                    title: "1º Happy Hour",
                    body: `<img src="https://bit.ly/2UHIvFL" alt="..." class="margin"><img src="https://bit.ly/2TZfoAL" alt="..." class="margin"><img src="https://bit.ly/2HHL0Ek" alt="..." class="margin">`,
                    classIcon: 'fa fa-glass bg-green'
                },
                {
                    id: 3,
                    time: "20/Janeiro",
                    title: "Revisão",
                    body: `Revisão do lançamento`,
                    classIcon: 'fa fa-glass bg-red'
                }
            ]
        },
        {
            title: "2018",
            item: [
                {
                    id: 3,
                    time: "30/Março",
                    title: "Lançamento do 1º Produto",
                    body: `Foi lançado o produto XPTO Manager, produto revolucionário com enfase na gestão de escolas`,
                    classIcon: 'fa fa-hourglass bg-purple'
                }
            ]
        },
        {
            title: "2017",
            item: [
                {
                    id: 4,
                    time: "12/Maio",
                    title: "1 milhão de vendas",
                    body: `Atingiu o primeiro objetivo do ano.<br> Atingir 1 milhão denvendas`,
                    classIcon: 'fa fa-line-chart bg-blue'
                }
            ]
        }
    ]

    constructor() { }

    getListTimeLine(): Timeline_node[] {
        return this.timelineList;
    }

    addNode(time: string, title: string, body: string) {

        if (time !== "" && title !== "" && body !== "") {
            let timeline_item: Timeline_item = {
                id: 0,
                time: time,
                title: title,
                body: body,
                classIcon: 'fa fa-line-chart bg-blue'
            };
         
            this.timelineList[0].item.push(timeline_item)

        }
    }

}