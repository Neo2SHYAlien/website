/**
 * Template loader class
 * Loads and stores templates
 **/
define(['templateLoader'], function(templateLoader){

  templateLoader = {
    templateVersion: Env.templateVersion,
    templates: {},
    loadRemoteTemplate: function(templateName, filename, callback) {

      if (!this.templates[templateName] || Env.environment == 'development') {
        var self = this;
        $.get(filename, function(data) {
          if(Env.environment != 'development')
          {
            self.addTemplate(templateName, data);
            self.saveLocalTemplates();
          }
          callback(data);
        });
      }
      else {
        callback(this.templates[templateName]);
      }
    },

    addTemplate: function(templateName, data) {
      this.templates[templateName] = data;
    },

    localStorageAvailable: function() {
     try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
    },

    saveLocalTemplates: function() {
      if (this.localStorageAvailable) {
        localStorage.setItem("templates", JSON.stringify(this.templates));
        localStorage.setItem("templateVersion", this.templateVersion);
      }
    },

    loadLocalTemplates: function() {
      if (this.localStorageAvailable) {
        var templateVersion = localStorage.getItem("templateVersion");
        if (templateVersion && templateVersion == this.templateVersion) {
          var templates = localStorage.getItem("templates");
          if (templates) {
            templates = JSON.parse(templates);
            for (var x in templates) {
              if (!this.templates[x]) {
                this.addTemplate(x, templates[x]);
              }
            }
          }
        }
        else {
          localStorage.removeItem("templates");
          localStorage.removeItem("templateVersion");
        }
      }
    }



  };

  templateLoader.loadLocalTemplates();

  window.templateLoader = templateLoader;
});

