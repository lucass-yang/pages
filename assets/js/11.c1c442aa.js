(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(s,a,t){"use strict";t.r(a);var e=t(56),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"初次运行git前的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初次运行git前的配置"}},[s._v("#")]),s._v(" 初次运行Git前的配置")]),s._v(" "),t("p",[s._v("Git自带一个"),t("code",[s._v("git config")]),s._v("的工具来帮助设置Git外观和行为的配置变量。\n所有的信息可以在"),t("code",[s._v(".git/config")]),s._v("文件中查看。")]),s._v(" "),t("h3",{attrs:{id:"用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户信息"}},[s._v("#")]),s._v(" 用户信息")]),s._v(" "),t("p",[s._v("当安装完Git后，第一件事就是设置用户名称和邮件地址。注意区分，这是本地的用户名和邮件地址，与远程代码托管的用户名和地址没有关系。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yang"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("@example.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在这里使用了"),t("code",[s._v("--global")]),s._v("选项，对于该操作系统的用户范围的所有仓库均有效，如果没有该选项，则只针对某一仓库有效。")]),s._v(" "),t("h3",{attrs:{id:"文本编辑器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本编辑器"}},[s._v("#")]),s._v(" 文本编辑器")]),s._v(" "),t("p",[s._v("Git默认的文本编辑器是Vim。如果想使用不同的编辑器，例如Emacs，可以输入以下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.editor emacs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"检查配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息"}},[s._v("#")]),s._v(" 检查配置信息")]),s._v(" "),t("p",[s._v("如果想要检查配置，可以输入以下命令查看：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("也可以通过输入"),t("code",[s._v("git config <key>")]),s._v("来查看指定的某一项配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name\nyang\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"获取帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[s._v("#")]),s._v(" 获取帮助")]),s._v(" "),t("p",[s._v("有三种方法可以找到Git命令的使用手册：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("verb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("verb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --help\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" git-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("verb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h1",{attrs:{id:"git基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git基础"}},[s._v("#")]),s._v(" Git基础")]),s._v(" "),t("p",[s._v("接下来介绍Git中使用的各种基本命令")]),s._v(" "),t("h2",{attrs:{id:"获取git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取git仓库"}},[s._v("#")]),s._v(" 获取Git仓库")]),s._v(" "),t("p",[s._v("有两种方法获取项目仓库，一种是在现有项目下导入所有文件到Git中，另一种是从服务器中克隆一个现有的Git仓库。")]),s._v(" "),t("h3",{attrs:{id:"在现有目录中初始化仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在现有目录中初始化仓库"}},[s._v("#")]),s._v(" 在现有目录中初始化仓库")]),s._v(" "),t("p",[s._v("对现有的目录进行管理，只需要进入该项目目录并输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("该命令将创建一个"),t("code",[s._v(".git")]),s._v("的子目录。")]),s._v(" "),t("p",[s._v("如果是在一个已经存在的文件夹（而不是空文件夹）中初始化Git仓库来进行版本控制的话，需要对文件进行跟踪并提交。用"),t("code",[s._v("git add")]),s._v("命令来实现对指定文件的跟踪，然后执行"),t("code",[s._v("git commit")]),s._v("命令提交：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" *.cpp\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" LICENSE\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'initial project version'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"克隆现有的仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆现有的仓库"}},[s._v("#")]),s._v(" 克隆现有的仓库")]),s._v(" "),t("p",[s._v("当想要从远端服务器上获取一个已经存在的项目时，需要使用"),t("code",[s._v("git clone [url]")]),s._v("命令来拷贝一份项目到本地。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/libgit2/libgit2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这会在当前目录下创建一个名为"),t("code",[s._v("gitlib2")]),s._v("的目录，并在这个目录下初始化一个"),t("code",[s._v(".git")]),s._v("文件夹。\n如果想要在克隆远程仓库时，自定义本地仓库的名字，可以使用如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/libgit2/libgit2 mygitlib\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这时，本地仓库的名字变为了"),t("code",[s._v("mygitlib")])]),s._v(" "),t("h2",{attrs:{id:"记录每次更新到仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记录每次更新到仓库"}},[s._v("#")]),s._v(" 记录每次更新到仓库")]),s._v(" "),t("h3",{attrs:{id:"检查当前文件状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查当前文件状态"}},[s._v("#")]),s._v(" 检查当前文件状态")]),s._v(" "),t("p",[s._v("要查看哪些文件处于什么状态，可以使用"),t("code",[s._v("git status")]),s._v("命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nnothing to commit, working directory clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("看到上述状态时说明现在的工作目录相等干净。")]),s._v(" "),t("h3",{attrs:{id:"跟踪新文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟踪新文件"}},[s._v("#")]),s._v(" 跟踪新文件")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("git add")]),s._v("命令开始跟踪一个文件。比如，要跟踪README文件，运行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此时再运行"),t("code",[s._v("git status")]),s._v("命令，会看到README文件已被跟踪。")]),s._v(" "),t("h3",{attrs:{id:"暂存已修改的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂存已修改的文件"}},[s._v("#")]),s._v(" 暂存已修改的文件")]),s._v(" "),t("h3",{attrs:{id:"状态简览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态简览"}},[s._v("#")]),s._v(" 状态简览")]),s._v(" "),t("p",[t("code",[s._v("git status")]),s._v("输出的信息十分详细，但显得有些繁琐。使用"),t("code",[s._v("git status -s")]),s._v("或者"),t("code",[s._v("git status --short")]),s._v("命令，将会得到一种更为紧凑的格式输出。运行"),t("code",[s._v("git status -s")]),s._v("，状态报告输出如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status -s\n M README\nMM Rakefile\nA  lib/git.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"忽略文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[s._v("#")]),s._v(" 忽略文件")]),s._v(" "),t("p",[s._v("一般有些文件无需纳入Git的管理，也不希望它们出现在未跟踪的文件列表，这些文件通常都是自动生成的文件。在这种情况下，可以创建一个"),t("code",[s._v(".gitignore")]),s._v("文件，列出需要忽略的文件模式。")]),s._v(" "),t("h3",{attrs:{id:"查看已暂存和为暂存的修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看已暂存和为暂存的修改"}},[s._v("#")]),s._v(" 查看已暂存和为暂存的修改")]),s._v(" "),t("p",[s._v("比较工作目录和暂存区与快照之间的差异，使用"),t("code",[s._v("git diff")]),s._v("命令来查看。\n如要查看已暂存的将要添加到下次提交的内容，可以用"),t("code",[s._v("git diff --cache")]),s._v("命令，更高版本使用"),t("code",[s._v("git diff --staged")]),s._v("命令。")]),s._v(" "),t("h3",{attrs:{id:"提交更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交更新"}},[s._v("#")]),s._v(" 提交更新")]),s._v(" "),t("p",[s._v("每次提交前，都使用"),t("code",[s._v("git status")]),s._v("来看一下，是不是都已经暂存起来了，然后再运行提交命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这种方式会启动文本编辑器以便输入本次提交的说明。\n另外，也可以直接将提交信息与命令行放在同一行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add something"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"跳过使用暂存区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳过使用暂存区域"}},[s._v("#")]),s._v(" 跳过使用暂存区域")]),s._v(" "),t("p",[s._v("虽然使用暂存区域的方式可以精心准备要提交的细节，但是这样做比较麻烦。只要在提交的时候，给"),t("code",[s._v("git commit")]),s._v("加上"),t("code",[s._v("-a")]),s._v("选项，Git就会自动把所有已跟踪的文件暂存起来一并提交，从而跳过"),t("code",[s._v("git add")]),s._v("步骤：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add something new'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"移除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移除文件"}},[s._v("#")]),s._v(" 移除文件")]),s._v(" "),t("p",[s._v("要从Git中移除某个文件，就必须要从已跟踪文件清单中移除（确切的说，是从暂存区域中移除），然后提交。可以用"),t("code",[s._v("git rm")]),s._v("命令来完成。\n当我们想把文件从Git仓库移除，但仍想文件保留在磁盘中时，使用"),t("code",[s._v("--cache")]),s._v("选项：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cache README\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"移动文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动文件"}},[s._v("#")]),s._v(" 移动文件")]),s._v(" "),t("h3",{attrs:{id:"查看提交历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[s._v("#")]),s._v(" 查看提交历史")]),s._v(" "),t("p",[t("code",[s._v("git log")]),s._v("命令会列出按提交时间的更新，最近的更新在最上面。")]),s._v(" "),t("h3",{attrs:{id:"撤销操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作"}},[s._v("#")]),s._v(" 撤销操作")]),s._v(" "),t("h2",{attrs:{id:"远程仓库的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库的使用"}},[s._v("#")]),s._v(" 远程仓库的使用")]),s._v(" "),t("p",[s._v("远程仓库是指托管在网络服务器中的项目的版本库。")]),s._v(" "),t("h3",{attrs:{id:"查看远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[s._v("#")]),s._v(" 查看远程仓库")]),s._v(" "),t("p",[s._v("如果想查看已经配置的远程仓库服务器，可以运行"),t("code",[s._v("git remote")]),s._v("命令。"),t("code",[s._v("origin")]),s._v("是Git对克隆仓库的默认名字。\n也可以指定选项"),t("code",[s._v("-v")]),s._v("，会显示需要读写远程仓库使用的Git保存的简写与其对应的URL。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\norigin https://github.com/schacon/ticgit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\norigin https://github.com/schacon/ticgit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"添加远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[s._v("#")]),s._v(" 添加远程仓库")]),s._v(" "),t("p",[s._v("运行"),t("code",[s._v("git remote add <shortname> <url>")]),s._v("添加一个新的远程库，同时指定一个可以轻松引用的简写：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote\norigin\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" pb https://github.com/paulboone/ticgit\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\norigin https://github.com/schacon/ticgit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\norigin https://github.com/schacon/ticgit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npb https://github.com/paulboone/ticgit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npb https://github.com/paulboone/ticgit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("现在可以用字符串"),t("code",[s._v("pb")]),s._v("来代替整个URL。")]),s._v(" "),t("h3",{attrs:{id:"从远程仓库中抓取与拉取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库中抓取与拉取"}},[s._v("#")]),s._v(" 从远程仓库中抓取与拉取")]),s._v(" "),t("p",[s._v("从远程仓库中获得数据，可以执行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用"),t("code",[s._v("git pull")]),s._v("命令来自动地抓取然后合并远程分支到当前分支。")]),s._v(" "),t("h3",{attrs:{id:"推送到远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库"}},[s._v("#")]),s._v(" 推送到远程仓库")]),s._v(" "),t("p",[s._v("当想分享自己的项目时，必须将其推送到服务器上。当想要将"),t("em",[s._v("master")]),s._v("分支推送到"),t("code",[s._v("origin")]),s._v("服务器上时，可以运行以下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看远程仓库-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库-2"}},[s._v("#")]),s._v(" 查看远程仓库")]),s._v(" "),t("p",[s._v("想要查看一个远程仓库的更多信息，可以使用：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看远程仓库是否连接成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库是否连接成功"}},[s._v("#")]),s._v(" 查看远程仓库是否连接成功：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果出现下面提示，则说明链接成功：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v("  Hi deeryang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You've successfully authenticated"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" but GitHub does not provide shell access"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"修改-gitignore后生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-gitignore后生效"}},[s._v("#")]),s._v(" 修改"),t("code",[s._v(".gitignore")]),s._v("后生效")]),s._v(" "),t("p",[s._v("具体做法：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清除缓存")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新trace file")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update .gitignore"')]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#提交和注释")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#同步到远程仓库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"与远程仓库同步基本步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与远程仓库同步基本步骤"}},[s._v("#")]),s._v(" 与远程仓库同步基本步骤")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#trace file")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit"')]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#add commit")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#push ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("git pull")]),s._v("提示"),t("code",[s._v("refusing to merge unrelated histories")]),s._v("时，解决方法：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --allow-unrelated-histories\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"分支问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支问题"}},[s._v("#")]),s._v(" 分支问题")]),s._v(" "),t("p",[s._v("查看分支： "),t("code",[s._v("git branch")]),s._v("\n创建分支： "),t("code",[s._v("git branch <name>")]),s._v("\n切换分支： "),t("code",[s._v("git checkout branch")]),s._v("\n创建+切换分支： "),t("code",[s._v("git checkout -b <name>")]),s._v("\n合并某分支到当前分支： "),t("code",[s._v("git merge <name>")]),s._v("\n删除分支： "),t("code",[s._v("git branch -d <name>")])]),s._v(" "),t("h3",{attrs:{id:"搭建网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建网站"}},[s._v("#")]),s._v(" 搭建网站")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hexo\n$ hexo init\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hexo-deployer-git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",[t("li",[s._v("在一个空文件夹中运行"),t("code",[s._v("Git Bash")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ hexo init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);