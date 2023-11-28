import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Interface/Task.interface';
import { API_URL } from 'src/environment/environment';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit{
  loading= false
  errorMessage=''
  tasks: Task[] = [];
  showModal: boolean = false;
  selectedBlogContent: string = '';


  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.loading= false;
    this.getTasks();
    this.tasks = [

      {
        user_id :"sda",
        question: "Was urgent care a thing in the 90s?",
        status: 'Pushed-to-WP',
        createdAt: '2 days ago',
        wordCount: 750,
        timeTaken: "88.2",
        modelUsed: 'gpt-4',
        blogContent:" 1234Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\nUsing Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n   Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.\n\nIt is widely believed that the history of Lorem Ipsum originates with Cicero in the 1st Century BC and his text De Finibus bonorum et malorum. This philosophical work, also known as On the Ends of Good and Evil, was split into five books. The Lorem Ipsum we know today is derived from parts of the first book Liber Primus and its discussion on hedonism, the words of which had been altered, added and removed to make it nonsensical and improper Latin. It is not known exactly when the text gained its current traditional form. However references to the phrase lorem ipsum can be found in the 1914 Loeb Classical Library Edition of the De Finibus in sections 32 and 33.\n\nIt was in this edition of the De Finibus that H. Rackman translated the text. The following excerpt is taken from section 32:\n\n qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem .\n\nThis is recognisable, in part, as today s standard Lorem Ipsum and was translated into:\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure .\n\nAdvancing to the 1960s, Lorem Ipsum was made popular by typeface manufacturer Letraset, who used it in their advertising campaigns. Letraset offered pages of Lorem Ipsum as rub down transfer sheets, which were widely used in the pre-computer era for layouts. These transfer pages, known as Letraset Body Type, were featured in the company s advertising and their popular catalogue.\n\nLorem Ipsum was reintroduced in the 1980s by the Aldus Corporation, a company that developed Desktop Publishing Software. Their most well known product PageMaker came with pre-installed graphics and word-processing templates containing a version of the faux latin language.\n "
      }
    ];
  }

  getTasks(){
    var formData: any = new FormData();
    formData.append('user_id', 'cherry123');

      this.httpClient.post(`${API_URL}/fetch_history`, formData).subscribe(
        (response: any) => {
          console.log(response);
          if (Array.isArray(response.history)) {
            console.log("is array");
            this.tasks = response.history.map((item: any) => ({
              user_id: item[0],
              createdAt: item[1],
              timeTaken: item[2],
              question: item[3],
              wordCount: item[4] ? parseInt(item[4], 10) : undefined,
              modelUsed: item[5],
              blogContent: item[6],
              status: item[6] === "Blog generation in progress" ? 'Creating' : 'Completed'
            }));
          }
        },
        (error) => {
          console.error('Error fetching tasks:', error);
        }
    );
    console.log(this.tasks);
  }

  openBlog(task: any): void {
    this.selectedBlogContent = task.blogContent; 
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}