Ext.define('Angular.extjs.view.Viewport', {
    extend: 'Ext.panel.Panel',

    renderTo: 'extApp',

    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.window.MessageBox'
    ],
    //@todo: Change to border layout. Get the panel to resize appropriately to its content.
    layout:'anchor',
    padding: 5,
    height: 250,
    items:[{
        title: 'Ext App Panel 1',
        html: 'Some html content',
        anchor: '100% 30%'
    },{
        title:'Ext App Panel 2',
        html:'A lot of hip html content! <br> Squid sustainable marfa, messenger bag occupy seitan migas health goth ethical gochujang affogato single-origin coffee mustache cray. Blue bottle banh mi hella, raw denim chicharrones next level dreamcatcher narwhal. Aesthetic direct trade etsy shabby chic, heirloom chia kombucha umami migas. Raw denim chicharrones fanny pack irony, farm-to-table cold-pressed quinoa heirloom fixie ethical pickled tumblr forage. PBR&B waistcoat shoreditch, tote bag tacos bicycle rights leggings offal paleo fashion axe cliche street art taxidermy put a bird on it. Cliche drinking vinegar cronut, direct trade post-ironic poutine lo-fi distillery pabst. Chillwave brunch retro hella locavore.',
        anchor:'100% 70%'
    }]
});