const testModule = require('../templates/module-test'),
  image = require('../images/moon'),
  benchmark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAJZSURBVH3BPUvrUACA4bfnJETsoIIV6qBFCtKiQoc6SPD7I3/ACw6KoJv+Bkm4Sy/iD3DQzU2oOLu5iCCilKJQ7CjtFbcEY3Ka24AFEa/PkwAiPmiaRhiGxIQQSCkJgoCfCD7ouk4YhnS0Wi2iKCKRSPATQZuu6wRBQGz11yqFQgHDMAjDkCiKMAyD/xFSSoIgIOZ5HoPpQYaHh9nZ2aG3t5eY7/toaHxH8OHw8JDj42NmZ2eRUiKlZG1tjYQQxEJCviOUUsS2t7dxHIerqyvq9Trr6+tsbm6yvLREhyElX2m0LSwu8Pb2RjKZJJ/PYxgG19fXPD4+0tfXRzabpVar4SuFlBKlFB2CtpW5FZp/m0xPT2NZFvV6nUajgeu6jI6Osru7S7FYJKaU4jNB2+8/v8kMZzg4OGBgYIBCoYBt29i2jWmaPD09YZomXV1dxIQQdEjAfvffsW2bXC5HKpViaGgIy7LwfZ9KpcL5+Tmu61IsFrm/vyeKIqSURFGE4BPTNCmXyxwdHdHT08Pd3R03NzdsbW0xMjJCrVZjbm6OmFKKmEgmk3ScnJxwdnbG6ekpY2NjWJbF/Pw8Dw8PpNNp8vk8ruvymQzD0KbNcRxs26ZareJ5HjMzMzw/PzMxMcHr6ytTU1PkcjnK5TIvLy90SMDWdZ1Wq4XjOFQqFRqNBtlslkwmQ6lUolQqcXFxwd7eHsvLy4yPj3N7e0ssAUS0dXd343kesWq1Sn+qn1R/ipjv+0gp2d/fZ3FxkcnJSWKappEAIj5IKVFK8dnGxgbNZhPXdbm8vOSrf2/T7iEkhMBLAAAAAElFTkSuQmCC',
  benchmark1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAI8SURBVH3BPUvjYADA8X+Sh6RUqS9jdx0cilMEl1oQQYfTVUHwtJycIoIuTpoigoubn0D0E+jsC+pSqDoXpCB4DkVMsR48aeJzeaABEc/fzwAUbbZtEwQBmmVZCCGQUvIdkzbHcQiCgEQURSilMAyD75jEHMdBSom2VdpifHycdDpNEAQopUin0/yPJYTwWq0WmlKKpz9PGIbB0tISl5eXNJtNWq0WNjYREZ+ZtD0+PlKr1ZienkYIgRCCnZ0dDMtCCwj4ihmGIVo2m6VQKHB8fMzt7S1TU1PMz8/ze3GRRFoIPhPEir+KaD09PeTzeTo6OqjX61xfX5PNZnFdl3K5zN8wRAhBGIYkTGLLP5fRZmdnyWQy3NzccH9/j+/7DA8Pc3BwwOTkJFoYhnxkEhv9MYq2traGNjExwcjICHNzcxQKBSqVCjMzM3R2dqJZlkXCJPZcf0bL5XK8vb0xMDCA7/to1WqVw8NDzs/P2dzcRIuiCCEEmgV4xDzPo9FocHp6ytnZGWNjY1SrVU5OTlhfX0dKycXFBUNDQ9zd3fH+/o5mdnd3k9jY2GB3d5ft7W20/v5+FhYWuLq6oq+vj3w+j+/7fGRJKT1ipVIJz/PQBgcHSaVSaKlUit7eXnK5HK7rsr+/z8PDAwkDUI7jIKVEU0qRyGQyvL6+opSiUqlQLBZZXV2l2WyysrKCZgCKWFdXF41GA00pxVfK5TKu62IYBppt2xiAok0IQRiGfLS3t0etVuPl5YWjoyM++wcQzOdOsGwgXgAAAABJRU5ErkJggg==',
  option = {
    sharpenStrength: 1.0
  },
  option1 = {
    sharpenStrength: 1.5
  },
  optionsTest = require('../templates/options-test');

optionsTest('sharpen', [option, option1], [benchmark, benchmark1], image);
testModule('sharpen', option, benchmark, image);