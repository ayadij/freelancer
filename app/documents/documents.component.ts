import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://uangteman.com/blog/wp-content/uploads/2016/08/Yuk-Hitung-Untung-Rugi-Kerja-Sampingan-copy.jpg',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://www.breadandbuttermarketing.com.au/wp-content/uploads/2016/04/Freelancer.jpg',
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'http://szssplit.hr/wp-content/uploads/2017/12/freelancing-tips.jpg',
    }
  ]
}
